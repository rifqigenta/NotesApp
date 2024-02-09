import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Sign.css";
import toast from "react-hot-toast";

const LOG_URL = "/login";

const LoginComponent = () => {
  const { setAuth } = useAuth();

  const userRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOG_URL, JSON.stringify({ user, pass }), {
        headers: { "Content-Type": "application/json" },
      });
      const access_token = response?.data?.access_token;
      const id = response?.data?.user?.id;
      const name = response?.data?.user?.name;
      setAuth({ user, pass, access_token, name, id });
      if (id === 1) {
        toast.success("Welcome Admin");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      } else {
        toast.success(`Welcome ${name}`);
        setTimeout(() => {
          navigate("/home");
        }, 2500);
      }
      setUser("");
      setPass("");
    } catch (err) {
      toast.error("Login failed");
      setTimeout(() => {
        window.location.reload();
      }, 4500);
      if (!err?.response) {
        setErr("No Server Response");
      } else if (err.response?.status === 400) {
        setErr("Missing Username or Password");
      } else {
        setErr("Login Failed");
      }
    }
  };

  const handleRegister = () => navigate("/register");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <>
      <section className='gate'>
        <div id='login_card' className='card border-t-2 border-neutral-content  w-[420px] bg-base-100 shadow-xl p-8'>
          <p className='text-[30px] text-center mb-8'>Login</p>
          <form onSubmit={handleSubmit} className='flex flex-col mx-0 justify-center gap-8'>
            <input
              type='text'
              name='user'
              placeholder='Username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className='input input-bordered input-accent rounded-full'
            />
            <input type='password' name='password' placeholder='Password' onChange={(e) => setPass(e.target.value)} value={pass} required className='input input-bordered input-accent rounded-full' />
            <button className='btn btn-success mb-2 w-full rounded-full'>Log In</button>
            {/* <SwalLogin /> */}
          </form>
          <p className='text-center'>
            Don't have an account ?
            <button className='btn btn-link p-0 ms-2' onClick={handleRegister}>
              Register
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
