import { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import { useNavigate } from "react-router-dom";

const SwalRegister = ({ validName, validUser, validPass, validMatch }) => {
  const [swalProps, setSwalProps] = useState({});
  const navigate = useNavigate();

  const handleRegister = () => {
    setSwalProps({
      show: true,
      title: "Registration Success",
      text: "Account Created",
      confirmButtonText: "Login",
    });
  };
  const handleConfirm = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={handleRegister} disabled={!validName || !validUser || !validPass || !validMatch ? true : false} className='btn btn-success mb-2 w-full rounded-full'>
        Sign Up
      </button>
      <SweetAlert2 {...swalProps} onConfirm={handleConfirm} />
    </>
  );
};

export default SwalRegister;
