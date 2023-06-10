// import React from 'react';
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyEnrolledClasses = () => {
  const [cart] = useCart();
  
  return (
    <div>
      <Helmet>
        <title>My Enrolled Classes</title>
      </Helmet>
      <h2 className="font-bold text-3xl text-center mb-5">My Enrolled Classes</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructors</th>
              <th>Price</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
