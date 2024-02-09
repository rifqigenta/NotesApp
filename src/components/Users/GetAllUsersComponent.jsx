import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import TableUser from "../../layouts/Admin/TableUser";
import ModalPutUser from "../../layouts/Users/ModalPutUser";
import ModalDeleteUsers from "../../layouts/Admin/ModalDeleteUsers";

const GetAllUsersComponent = () => {
  const { auth } = useAuth();
  const { access_token } = auth;

  const [listUser, setListUser] = useState([]);

  const getAllUser = async () => {
    try {
      const response = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const detailUser = response.data.users.map((i) => ({
        id: i.id,
        name: i.name,
        user: i.user,
        created_at: i.created_at,
        updated_at: i.updated_at,
        action: (
          <div className='flex gap-2'>
            <div>
              <ModalPutUser getAllUser={getAllUser} id={i.id} name={i.name} user={i.user} />
            </div>
            <div>
              <ModalDeleteUsers getAllUser={getAllUser} id={i.id} name={i.name} />
            </div>
          </div>
        ),
      }));
      setListUser(detailUser);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <div className='max-h-[50vh] overflow-y-scroll'>
        <table className='table'>
          <thead className='bg-neutral sticky top-0'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          {listUser.map((user) => (
            <TableUser data={[user]} />
          ))}
        </table>
      </div>
    </>
  );
};

export default GetAllUsersComponent;
