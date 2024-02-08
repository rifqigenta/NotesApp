import { useState, createContext } from "react";
import { Toaster } from "react-hot-toast";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ id: null });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children} <Toaster />{" "}
    </AuthContext.Provider>
  );
};

export default AuthContext;
