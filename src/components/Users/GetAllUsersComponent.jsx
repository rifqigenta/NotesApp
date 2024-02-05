import React from "react";

const GetAllUsersComponent = () => {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead className='bg-neutral text-white'>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='bg-neutral-content text-base-100'>
            <tr className='hover hover:text-neutral-content'>
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr className='hover hover:text-neutral-content'>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr className='hover hover:text-neutral-content'>
              <th>3</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllUsersComponent;
