import Header from "../../layouts/Users/Header";
import ListAllNotes from "../../components/Notes/ListAllNotes";
import useAuth from "../../hooks/useAuth";
import "../../styles/Layout.css";

const Home = () => {
  const { auth } = useAuth();
  const { name } = auth;

  return (
    <>
      <nav>
        <Header />
      </nav>
      <section>
        <div id='user_home_card' className='card flex flex-col gap-8 mt-8 mx-28 shadow-xl border-t-2 border-neutral px-0 pb-8 min-h-[55vh] max-h-min'>
          <h1 className='text-center text-[34px] mt-2 mb-0'>Welcome Back '{name}'</h1>
          <div id='list_user_notes' className='flex flex-col gap-8 mt-2 mx-36'>
            <ListAllNotes />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
