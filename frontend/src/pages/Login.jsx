import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up"); // Sign Up, Login

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
          placeholder="Name"
          required
        />
      )}

      <input
        className="w-full px-3 py-2 border border-gray-400 outline-gray-400"
        type="Email"
        placeholder="Email"
        required
      />

      <input
        className="w-full px-3 py-2 border border-gray-400 outline-gray-400"
        type="password"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-red-600 font-bold">
          {
            currentState==="Login" ? "Forgot your password" :""
          }
        
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
