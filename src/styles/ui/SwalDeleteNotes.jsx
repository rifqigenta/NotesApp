import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import SweetAlert2 from "react-sweetalert2";
import { MdDelete } from "react-icons/md";

const SwalDeleteNotes = ({ note_id, getAllNotes }) => {
  const { auth } = useAuth();

  const [swalProps, setSwalProps] = useState({});

  const { access_token } = auth;

  const handleDelete = async (e) => {
    e.preventDefault();
    setSwalProps({
      show: true,
      icon: "warning",
      title: `Delete Note ${note_id} ?`,
      confirmButton: "Delete",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });
  };
  const handleConfirm = async () => {
    const response = await axios.delete(`/notes/${note_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    getAllNotes();
  };
  return (
    <div onClick={handleDelete} className='btn px-1 hover:text-error hover:bg-transparent hover:border-none border-none'>
      <MdDelete size={20} /> Delete
      <SweetAlert2 {...swalProps} onConfirm={handleConfirm} />
    </div>
  );
};

export default SwalDeleteNotes;
