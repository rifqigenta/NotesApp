import Header from "../../layouts/Users/Header";
import useAuth from "../../hooks/useAuth";
import GetOneUserComponent from "../../components/Users/GetOneUserComponent";

const UserProfile = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <section className='gate'>
        <GetOneUserComponent />
      </section>
    </>
  );
};

export default UserProfile;
