import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Loading from "../components/Loading";
import { auth } from "../firebase/config";

const AuthContextDefaultValue = {
  admin: { email: "" },
  setadmin: () => {},
};

export const AuthContext = createContext(AuthContextDefaultValue);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(AuthContextDefaultValue.admin);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (admin) => {
      if (admin) {
        setAdmin({ ...admin });
        setIsLoading(false);
        navigate("/");
        return;
      }
      setAdmin({ ...AuthContextDefaultValue.admin });
      setIsLoading(false);
      navigate("/login");
    });
    return () => {
      unsubcribed();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
