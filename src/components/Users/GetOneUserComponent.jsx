import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import ModalPutUser from "../../layouts/Users/ModalPutUser";
import ModalDeleteUser from "../../layouts/Users/ModalDeleteUser";

const GetOneUserComponent = () => {
  const { auth } = useAuth();

  const { access_token, name, user } = auth;

  const getAllUser = async () => {
    try {
      const response = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className='card border-t-2 border-neutral-content  w-[420px] bg-base-100 shadow-xl py-8 px-6'>
      <p className='text-[30px] text-center mb-8'>User Profile</p>
      <div className='flex flex-col mx-0 gap-8 text-[24px]'>
        <div className='flex justify-center border-b-2 border-accent p-2 rounded-[14px]'>
          <p>Name : &emsp;</p>
          <p>{name}</p>
        </div>
        <div className='flex justify-center border-b-2 border-accent p-2 rounded-[14px]'>
          <p>User : &emsp;</p>
          <p>{user}</p>
        </div>
        <div className='flex justify-center border-b-2 border-accent p-2 rounded-[14px]'>
          <p>Pass : &emsp;</p>
          <p>********</p>
        </div>
        <div className='flex justify-center gap-4'>
          <ModalPutUser getAllUser={getAllUser} name={name} user={user} />
          <ModalDeleteUser />
        </div>
      </div>
    </div>
  );
};

export default GetOneUserComponent;
