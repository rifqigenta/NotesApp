import React from "react";
import Header from "../../layouts/Admin/Header";
import GetAllUsersComponent from "../../components/Users/GetAllUsersComponent";
const DaftarUser = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <section>
        <div className='card flex flex-col gap-8 mt-16 mx-28 shadow-xl border-t-2 border-neutral px-8 pt-8 min-h-[75vh] max-h-min'>
          <p className='text-[34px] text-center'>Daftar User</p>
          <GetAllUsersComponent />
        </div>
      </section>
    </>
  );
};

export default DaftarUser;
