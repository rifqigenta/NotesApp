import React from "react";
import Header from "../../layouts/Admin/Header";
import GetAllNotes from "../../components/Notes/GetAllNotes";

const AdminDashboard = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <section>
        <div className='flex flex-col gap-8 mt-16 mx-36'>
          <p className='text-center text-[34px]'>Daftar Notes User</p>
          <GetAllNotes />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
