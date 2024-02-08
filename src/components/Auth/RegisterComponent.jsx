import { useEffect, useRef, useState } from "react";
import "../../styles/Sign.css";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
const PASS_REGEX = /^(?=.*[a-z]).{6,24}$/;

const REG_URL = "/register";

const RegisterComponent = () => {
  const nameRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = NAME_REGEX.test(name);
    const v2 = USER_REGEX.test(user);
    const v3 = PASS_REGEX.test(pass);
    if (!v1 || !v2 || !v3) {
      setErr("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(REG_URL, JSON.stringify({ name, user, pass }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
      console.log(response.data);
      console.log(response.access_token);
      console.log(JSON.stringify(response));
      toast.success("Account Created, redirect to Login ...");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (err) {
      if (!err?.response) {
        setTimeout(() => {
          toast.error(err);
        }, 4500);
      } else if (err.response?.status === 409) {
        setTimeout(() => {
          toast.error("Registration Failed");
        }, 4500);
      } else {
        setTimeout(() => {
          toast.error("User Already Exist");
        }, 4500);
      }
      errRef.current.focus();
    }
  };

  const handleLogin = () => navigate("/");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const resName = NAME_REGEX.test(name);
    const resUser = USER_REGEX.test(user);
    setValidName(resName);
    setValidUser(resUser);
  }, [name, user]);

  useEffect(() => {
    const resPass = PASS_REGEX.test(pass);
    setValidPass(resPass);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    setErr("");
  }, [name, user, pass, matchPass]);
  return (
    <>
      <section className='gate'>
        <div className='card border-t-2 border-neutral-content w-[420px] bg-base-100 shadow-xl p-8'>
          <p className='text-[30px] text-center mb-8'>Sign Up</p>
          <p ref={errRef} className={err ? "errmsg" : "offscreen"} aria-live='assertive'>
            {err}
          </p>
          <form className='flex flex-col mx-0 justify-center gap-6' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              id='name'
              ref={nameRef}
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby='namenote'
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              className={`input input-bordered input-accent rounded-full ${validName ? "" : "input-error"}`}
            />
            <p id='namenote' className={`text-error ${nameFocus && name && !validName ? "" : "hidden"}`}>
              4 - 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hypens allowed
            </p>
            <input
              type='text'
              name='user'
              placeholder='User'
              id='user'
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validUser ? "false" : "true"}
              aria-describedby='uidnote'
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className={`input input-bordered input-accent rounded-full ${validUser ? "" : "input-error"}`}
            />
            <p id='uidnote' className={`text-error ${userFocus && user && !validUser ? "" : "hidden"}`}>
              4 - 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hypens allowed
            </p>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setPass(e.target.value)}
              required
              aria-invalid={validPass ? "false" : "true"}
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
              placeholder='Create password'
              className={`input input-bordered input-accent rounded-full ${validPass ? "" : "input-error"}`}
            />
            <input
              type='password'
              name='confirm'
              id='confirm'
              onChange={(e) => setMatchPass(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              placeholder='Confirm password'
              className={`input input-bordered input-accent rounded-full ${validMatch ? "" : "input-error"}`}
            />
            <button disabled={!validName || !validUser || !validPass || !validMatch ? true : false} className='btn btn-success mb-2 w-full rounded-full'>
              Sign Up
            </button>
          </form>
          <p className='text-center'>
            Already have an account ?
            <button className='btn btn-link p-0 ms-2' onClick={handleLogin}>
              Login
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default RegisterComponent;
