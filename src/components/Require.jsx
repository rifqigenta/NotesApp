import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Require = ({ allowedID }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const isAdmin = Array.isArray(auth?.id) && auth?.id.includes(allowedID);
  //   const isAdmin = auth?.id?.find((i) => allowedID?.includes(i));

  return auth?.user ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
  // auth?.user ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />
};

export default Require;
