// import React from 'react';

import { useForm } from "react-hook-form";

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center  mt-10" >
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
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <span className="text-red-500">Please enter a valid email</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <span className="text-red-500">
              Password must be at least 6 characters long
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">Passwords do not match</span>
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

        <button
          type="submit"
          className="my-btn"
        >
          Register
        </button>
      </form>
      </div>
    </div>
  );
};

export default Registration;
