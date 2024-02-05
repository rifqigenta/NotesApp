import React from "react";
import "../../styles/Sign.css";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleRegister = () => navigate("/register");

  return (
    <>
      <section className='gate'>
        <div className='card border-t-2 border-neutral-content  w-[420px] bg-base-100 shadow-xl p-8'>
          <p className='text-[30px] text-center mb-8'>Login</p>
          <form className='flex flex-col mx-0 justify-center gap-8'>
            <input type='email' name='email' placeholder='Email' className='input input-bordered input-accent rounded-full' />
            <input type='password' name='password' placeholder='Password' className='input input-bordered input-accent rounded-full' />
            <button className='btn btn-success mt-2 rounded-full'>Log In</button>
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
