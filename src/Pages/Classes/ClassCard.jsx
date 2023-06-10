// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassCard = ({ classItem }) => {
  const {_id,name,image,instructor,availableSeats,price} =classItem
  const { user } = useContext(AuthContext);
  const navigate =useNavigate();
  const location =useLocation();
  const [,refetch] =useCart();

  const handleLogin = () => {
    navigate("/login",{state:{from :location}});
  };

  const handleCancel = () => {
    toast.dismiss();
  };

  const handleAddToSelect = (classItem) => {
    console.log("Button clicked", classItem);
    if (user && user.email) {
      const cartItemOrder ={clasesId:_id,name,image,availableSeats,price,instructor,email:user.email}
      fetch("http://localhost:5000/carts",{
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItemOrder)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Add to cart successfully!");
          }
        });
    } else {
      // toast.error("Please Login to add cart !", {
      //   position: toast.POSITION.TOP_CENTER
      // });
      toast.error(
        <div className="flex flex-col items-center">
          <span>Please Login to add to cart!</span>
          <div className="mt-4">
            <button
              className="my-btn"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          closeButton: false, // Hide the close button
        }
      );
    }
  };

  return (
    <div
      key={_id}
      className={`bg-white p-4 rounded shadow ${
        classItem.availableSeats === 0 ? "bg-red-500" : ""
      }`}
    >
      <img
        src={image}
        alt={classItem.name}
        className="w-full h-32 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>Instructor: {instructor}</p>
      <p>Available Seats: {availableSeats}</p>
      <p>Price: ${price}</p>
      <button
        className="my-btn"
        onClick={() => handleAddToSelect(classItem)}
        disabled={
          classItem.availableSeats === 0 ||
          classItem.isAdmin ||
          classItem.isInstructor
        }
      >
        {classItem.isAdmin || classItem.isInstructor
          ? "Admin/Instructor"
          : "Select"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default ClassCard;
