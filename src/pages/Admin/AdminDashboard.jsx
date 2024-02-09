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
        <div className='card flex flex-col gap-8 mt-8 mx-28 shadow-xl border-t-2 border-neutral px-8 pb-8 min-h-[55vh] max-h-min'>
          <p className='text-center text-[34px] mt-6'>Daftar Notes User</p>
          <div className='flex flex-col gap-8 mt-0 mx-36'>
            <GetAllNotes />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
