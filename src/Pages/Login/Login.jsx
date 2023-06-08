// import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // Implement logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required.</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
            >
              <FaEye
                className={`w-5 h-5 text-gray-500 ${
                  showPassword ? "text-blue-500" : ""
                }`}
              />
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full my-btn"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/registration"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Dont have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
