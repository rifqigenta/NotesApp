import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import { MdAddCircleOutline } from "react-icons/md";
import toast from "react-hot-toast";

const NOTES_URL = "/notes";
const ModalPostNotes = ({ getAllNotes }) => {
  const { auth } = useAuth();
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");

  const { access_token } = auth;

  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(NOTES_URL, JSON.stringify({ title: newTitle, note: newNote }), {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("New Notes Created");
      setNewTitle("");
      setNewNote("");
      closeModal();
      getAllNotes();
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
      <button className='btn hover:border hover:border-info' onClick={() => document.getElementById("my_modal_1").showModal()}>
        <MdAddCircleOutline size={20} /> Add New Notes
      </button>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h1 className='text-[34px] mb-12'>New Notes</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-8'>
            <input
              type='text'
              name='title'
              required
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder='Insert Title'
              value={newTitle}
              className='input input-bordered input-accent rounded-full'
            />
            <input
              type='textarea'
              name='note'
              required
              onChange={(e) => setNewNote(e.target.value)}
              placeholder='Insert Note'
              value={newNote}
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

export default ModalPostNotes;
