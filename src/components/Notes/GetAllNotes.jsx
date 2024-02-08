import React from "react";

const GetAllNotes = () => {
  return (
    <>
      <details className='collapse collapse-arrow bg-base-200'>
        <summary className='collapse-title text-xl font-medium'>Tes Request 1</summary>
        <div className='collapse-content'>
          <div className='overflow-x-auto'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Note ID</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Title</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-neutral'>
                  <th>Note ID</th>
                  <td>User ID</td>
                  <td>User Name</td>
                  <td>Title</td>
                  <td className='max-w-[8em]'>Note</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </>
  );
};

export default GetAllNotes;
