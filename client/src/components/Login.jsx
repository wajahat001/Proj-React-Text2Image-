import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
<<<<<<< HEAD
import axios from 'axios'
import { toast } from "react-toastify";


const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token); // Corrected this line
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else if(state !== "Login") {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token); // Corrected this line
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

=======

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
<<<<<<< HEAD
      <form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500 ">
        <h1 className="text-center text-neutral-700 text-2xl font-medium">
          {state === "Login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-sm">
          {state === "Login" ? "Welcome back! Please SignIn to continue" : "Create an account to get started"}
          
        </p>
        

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center mt-5 gap-2 rounded-full">
            <img src={assets.user_icon} alt="" />
            <input
              onChange={e => setName(e.target.value)}
              value={name}
=======
      <form className="relative bg-white p-10 rounded-xl text-slate-500 ">
        <h1 className="text-center text-neutral-700 text-2xl font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please SignIn to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2  flex items-center mt-5 gap-2 rounded-full">
            <img src={assets.user_icon} alt="" />
            <input
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

<<<<<<< HEAD
        <div className="border px-6 py-2 flex items-center mt-4 gap-2 rounded-full">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
=======
        <div className="border px-6 py-2  flex items-center mt-4 gap-2 rounded-full">
          <img src={assets.email_icon} alt="" />
          <input
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
          />
        </div>
<<<<<<< HEAD
        
        <div className="border px-6 py-2 flex items-center mt-4 gap-2 rounded-full">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
=======
        <div className="border px-6 py-2  flex items-center mt-4 gap-2 rounded-full">
          <img src={assets.lock_icon} alt="" />
          <input
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
<<<<<<< HEAD

=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password
        </p>

        <button className="bg-blue-600 rounded-full text-white w-full py-2">
<<<<<<< HEAD
          {state === "Login" ? "Login" : "Create Account"}
=======
          {state === "Login" ? "Login" : "create account"}
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
        </button>

        {state === "Login" ? (
          <p className="text-center mt-5">
<<<<<<< HEAD
            Don’t have an account?{" "}
=======
            Dont have an account?{" "}
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
<<<<<<< HEAD
              Sign Up
=======
              SignUp
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
            </span>
          </p>
        ) : (
          <p className="text-center mt-5">
<<<<<<< HEAD
            Already have an account?{" "}
=======
            Already have an account{" "}
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;
