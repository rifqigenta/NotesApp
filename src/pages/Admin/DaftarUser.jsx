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
        <div className='flex flex-col gap-8 mt-16 mx-36'>
          <p className='text-[34px] text-center'>Daftar User</p>
          <GetAllUsersComponent />
        </div>
      </section>
    </>
  );
};

export default DaftarUser;
