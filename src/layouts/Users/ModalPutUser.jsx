import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import toast from "react-hot-toast";

const ModalPutUser = ({ getAllUser, name, user, id }) => {
  const { auth } = useAuth();

  const [updateName, setUpdateName] = useState("");
  const [updateUser, setUpdateUser] = useState("");
  const [updatePass, setUpdatePass] = useState("");

  const { access_token } = auth;

  const closeModal = () => document.getElementById(`my_modal_put_user${id}`).close();

  const handleOpen = () => {
    getAllUser();
    document.getElementById(`my_modal_put_user${id}`).showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/users/${id}`, JSON.stringify({ name: updateName, user: updateUser, pass: updatePass }), {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Successfully Edit User!");
      closeModal();
      getAllUser();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <button onClick={handleOpen} className='btn btn-outline w-28 btn-info mt-4'>
        Edit
      </button>
      <dialog id={`my_modal_put_user${id}`} className='modal'>
        <div className='modal-box'>
          <h1 className='text-[34px] mb-12'>Update User ({name})</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-8'>
            <input type='text' name='name' required onChange={(e) => setUpdateName(e.target.value)} placeholder={name} value={updateName} className='input input-bordered input-accent rounded-full' />
            <input type='text' name='user' required onChange={(e) => setUpdateUser(e.target.value)} placeholder={user} value={updateUser} className='input input-bordered input-accent rounded-full' />
            <input
              type='password'
              name='pass'
              required
              onChange={(e) => setUpdatePass(e.target.value)}
              placeholder='New Password'
              value={updatePass}
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

export default ModalPutUser;
