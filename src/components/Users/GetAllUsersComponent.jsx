import React from "react";

const GetAllUsersComponent = () => {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead className='bg-neutral text-white'>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Name</th>
              <th>User</th>
              <th>Created Time</th>
              <th>Updated Time</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='bg-neutral-content text-base-100'>
            <tr className='hover hover:text-neutral-content'>
              <th>no</th>
              <td>id</td>
              <td>name</td>
              <td>user</td>
              <td>created_at</td>
              <td>updated_at</td>
              <td>last_login_at</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllUsersComponent;
