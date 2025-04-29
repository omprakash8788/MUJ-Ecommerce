import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up"); // Sign Up, Login
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);


  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");


  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      if(currentState==="Sign Up"){
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
        // console.log(response.data)
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
      else{
        const response = await axios.post(backendUrl + '/api/user/login', {email, password})
        //  console.log(response.data)
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token)
        }
        else{
          toast.error(response.data.message)
          
        }
      }
      
    } catch (error) {
      console.log(error)
      
    }
  };
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex bg-blue-100 p-6 rounded flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-400 outline-gray-400"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Name"
          required
        />
      )}

      <input
        className="w-full px-3 py-2 border border-gray-400 outline-gray-400"
        type="Email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        required
      />

      <input
        className="w-full px-3 py-2 border border-gray-400 outline-gray-400"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-red-600 font-bold">
          {currentState === "Login" ? "Forgot your password" : ""}
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black w-full text-white font-light px-8 py-2 mt-4 rounded">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
