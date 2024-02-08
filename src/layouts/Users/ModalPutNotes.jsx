import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import { MdEdit } from "react-icons/md";
import toast from "react-hot-toast";

const ModalPutNotes = ({ getAllNotes, note_id }) => {
  const { auth } = useAuth();
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateNote, setUpdateNote] = useState("");

  const { access_token } = auth;

  const closeModal = () => {
    document.getElementById(`my_modal_put${note_id}`).close();
  };

  const handleOpen = () => {
    getAllNotes();
    document.getElementById(`my_modal_put${note_id}`).showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/notes/${note_id}`, JSON.stringify({ title: updateTitle, note: updateNote }), {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Notes update successfully");
      setUpdateTitle("");
      setUpdateNote("");
      closeModal();
      getAllNotes();
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
      <button className='btn px-1 hover:text-info hover:bg-transparent hover:border-none border-none' onClick={handleOpen}>
        <MdEdit size={20} /> Edit
      </button>
      <dialog id={`my_modal_put${note_id}`} className='modal'>
        <div className='modal-box'>
          <h1 className='text-[34px] mb-12'>Update Note #{note_id}</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-8'>
            <input
              type='text'
              name='title'
              required
              onChange={(e) => setUpdateTitle(e.target.value)}
              placeholder='Insert Title'
              value={updateTitle}
              className='input input-bordered input-accent rounded-full'
            />
            <input
              type='textarea'
              name='note'
              required
              onChange={(e) => setUpdateNote(e.target.value)}
              placeholder='Insert Note'
              value={updateNote}
              className='input input-bordered input-accent rounded-full'
            />
            <div className='modal-action flex justify-end mt-8'>
              <form method='dialog'>
                <button className='btn'>Close</button>
              </form>
              <button className='btn' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalPutNotes;
