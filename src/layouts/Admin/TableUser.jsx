import React from "react";

const RowData = (val) => {
  const { id, name, user, created_at, updated_at, action } = val;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{user}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
        <td>{action}</td>
      </tr>
    </>
  );
};

const TableUser = (val) => {
  const { data } = val;
  return (
    <>
      {data?.map((rowData) => (
        <RowData id={rowData.id} name={rowData.name} user={rowData.user} created_at={rowData.created_at} updated_at={rowData.updated_at} action={rowData.action} />
      ))}
    </>
  );
};

export default TableUser;
