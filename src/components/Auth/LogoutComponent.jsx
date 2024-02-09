import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import SweetAlert2 from "react-sweetalert2";
import { MdLogout } from "react-icons/md";

const LogoutComponent = () => {
  const { auth } = useAuth();
  const { access_token } = auth;

  const [swalProps, setSwalProps] = useState({});

  const handleOpen = (e) => {
    e.preventDefault();
    setSwalProps({
      show: true,
      icon: "info",
      title: "Logout",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });
  };

  const handleSubmit = async () => {
    const response = await axios.post("/logout", JSON.stringify({}), {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };
  return (
    <div onClick={handleOpen} className='btn border-none bg-transparent hover:border-none hover:bg-transparent hover:text-error w-28 shadow-none'>
      <MdLogout size={25} />
      <SweetAlert2 {...swalProps} onConfirm={handleSubmit} />
    </div>
  );
};

export default LogoutComponent;
