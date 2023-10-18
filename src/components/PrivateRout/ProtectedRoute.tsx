import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user.getIdToken()
            .then((userToken) => {
              if (userToken === token) {
                navigate("/home");
              } else {
                navigate("/");
              }
            })
            .catch((error) => {
              console.error("Błąd podczas pobierania tokenu:", error);
              navigate("/");
            });
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [auth, navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
