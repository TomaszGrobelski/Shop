import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation();
  const pathLocation = location.pathname;

  useEffect(() => {
    const token = localStorage.getItem('user');

    if (token) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user
            .getIdToken()
            .then((userToken) => {
              if (userToken === token) {
                navigate(`${pathLocation}`);
              } else {
                navigate('/nika/');
              }
            })
            .catch((error) => {
              console.error('Błąd podczas pobierania tokenu:', error); // obsługa error
              navigate('/nika/');
            });
        } else {
          navigate('/nika/');
        }
      });
    } else {
      navigate('/');
    }
  }, [auth, navigate, pathLocation]);

  return <>{children}</>;
}

export default ProtectedRoute;
