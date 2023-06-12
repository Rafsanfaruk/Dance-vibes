// import React from 'react';

import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Selected Classes</title>
      </Helmet>
      <h2 className="font-bold text-3xl text-center mb-5">
        My Selected Classes
      </h2>

      <div className="uppercase flex justify-between mb-5">
        <div>
          <h2 className="text-3xl">Total Price: ${total}</h2>
        </div>
        <div>
          <Link to="/dashboard/payment">
            <button className="my-btn btn-sm ">PAY</button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>name</th>
              <th>Instructors</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-orange-600 text-white"
                  >
                    {" "}
                    <FaTrash></FaTrash>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
