import React from "react";

const RowHeaders = (val) => {
  const { note_id, user_name, title, note, action } = val;
  return (
    <>
      <tr>
        <th>{note_id}</th>
        <th>{user_name}</th>
        <th>{title}</th>
        <th>{note}</th>
        <th>{action}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { note_id, user_name, title, note, action } = val;

  return (
    <>
      <tr>
        <td>{note_id}</td>
        <td>{user_name}</td>
        <td>{title}</td>
        <td>{note}</td>
        <td>{action}</td>
      </tr>
    </>
  );
};
const TableNotes = (val) => {
  const { data, header } = val;
  return (
    <>
      <div className='collapse-content'>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              {header?.map((rowHeaders) => (
                <RowHeaders note_id={rowHeaders.note_id} user_name={rowHeaders.user_name} title={rowHeaders.title} note={rowHeaders.note} action={rowHeaders.action} />
              ))}
            </thead>
            <tbody>
              {data?.map((rowData) => (
                <RowData note_id={rowData.note_id} user_name={rowData.user_name} title={rowData.title} note={rowData.note} action={rowData.action} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableNotes;
