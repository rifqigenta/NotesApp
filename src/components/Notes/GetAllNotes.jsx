import React from "react";

const GetAllNotes = () => {
  return (
    <>
      <details className='collapse collapse-arrow bg-base-200'>
        <summary className='collapse-title text-xl font-medium'>Tes Request 1</summary>
        <div className='collapse-content'>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-neutral'>
                  <th>1</th>
                  <td>Hart Hagerty</td>
                  <td className='max-w-[8em]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati deleniti id nesciunt odio repudiandae, voluptates blanditiis quibusdam nihil quia?
                  </td>
                  <td>Purple</td>
                </tr>
                <tr className='hover:bg-neutral'>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr className='hover:bg-neutral'>
                  <th>3</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
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
