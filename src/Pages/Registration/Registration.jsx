// import React from 'react';

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate =useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile updated successfully");
          navigate('/');
        })
        .catch((err) => console.log(err));
    });

    // Show success toast
    toast.success("Registration successful!");
    console.log(data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="flex justify-center items-center  mt-10 mb-10">
        <div className="max-w-md w-full px-4">
          <h1 className="text-3xl font-bold mt-8 mb-4">Registration Page</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <span className="text-red-500">Please enter a valid email</span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/,
                    message:
                      "Password must contain at least one capital letter, one lowercase letter, one digit, and one special character",
                  },
                })}
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="photoUrl">
                Photo URL
              </label>
              <input
                {...register("photoUrl")}
                type="text"
                id="photoUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                {...register("gender")}
                id="gender"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                id="phoneNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                {...register("address")}
                id="address"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <input className="my-btn w-full" type="submit" value="Register" />
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Registration;
