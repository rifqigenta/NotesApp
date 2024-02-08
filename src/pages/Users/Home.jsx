import Header from "../../layouts/Users/Header";
import ListAllNotes from "../../components/Notes/ListAllNotes";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();
  const { user } = auth;

  return (
    <>
      <nav>
        <Header />
      </nav>
      <section>
        <h1 className='text-center text-[34px] mt-8 mb-12'>Welcome Back '{user}'</h1>
        <div className='flex flex-col gap-8 mt-4 mx-36'>
          <ListAllNotes />
        </div>
      </section>
    </>
  );
};

export default Home;
