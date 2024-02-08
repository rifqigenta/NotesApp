import SweetAlert2 from "react-sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SwalLogin = () => {
  const { auth } = useAuth();
  const [swalProps, setSwalProps] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { id } = auth;
  if (!id) {
    setSwalProps({
      show: true,
      title: "Login Failed",
      text: "User not found !",
      icon: "error",
    });
    console.log(auth);
  } else {
    setSwalProps({
      show: true,
      title: "Login Success",
      text: "Welcome",
      icon: "success",
    });
  }
  console.log(auth);
  // };

  const handleConfirm = () => {
    // const { id } = id;
    if (auth.id === 1) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
    // navigate(from, { replace: true });
  };

  return (
    <>
      <SweetAlert2 {...swalProps} />
    </>
  );
};

export default SwalLogin;
