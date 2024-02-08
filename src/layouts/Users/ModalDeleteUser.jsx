import { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import toast from "react-hot-toast";

const ModalDeleteUser = () => {
  const { auth } = useAuth();

  const { access_token, id } = auth;

  const [swalProps, setSwalProps] = useState({});

  const handleOpen = (e) => {
    e.preventDefault();
    setSwalProps({
      show: true,
      icon: "warning",
      title: "Are you sure to delete this account ?",
      text: "This action may affect this account to be permanently deleted",
      confirmButtonText: "Delete",
      confirmButtonColor: "#DD6B55",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response);
      toast.success("Successfully delete user!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("Failed deleting user");
    }
    // try {
    //   const response = await axios.delete(`/users/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${access_token}`,
    //     },
    //   });
    //   console.log(response);
    //   setSwalProps({
    //     show: true,
    //     icon: "success",
    //     title: "User Deleted",
    //   });
    // } catch (err) {
    //   console.error(err);
    //   setSwalProps({
    //     show: true,
    //     icon: "error",
    //     title: "Something wrong !",
    //     text: "Failed Deleting User ...",
    //   });
    // }
  };

  return (
    <>
      <div onClick={handleOpen} className='btn btn-outline w-28 btn-error mt-4'>
        Delete
        <SweetAlert2 {...swalProps} onConfirm={handleSubmit} />
      </div>
    </>
  );
};

export default ModalDeleteUser;
