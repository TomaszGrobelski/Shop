import { useNavigate, useLocation } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation()
  const pathLocation=location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user.getIdToken()
            .then((userToken) => {
              if (userToken === token) {
                navigate(`${pathLocation}`);
              } else {
                navigate("/nika/");
              }
            })
            .catch((error) => {
              console.error("Błąd podczas pobierania tokenu:", error);
              navigate("/nika/");
            });
        } else {
          navigate("/nika/");
        }
      });
    } else {
      navigate("/");
    }
  }, [auth, navigate, pathLocation]);

  return <>{children}</>;
}

export default ProtectedRoute;
