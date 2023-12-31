// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });
  const handleMakeAdmin =user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin !!` ,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is now an instructor!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleDelete = () => {};

  return (
    <div>
      <Helmet>
        <title>All users</title>
      </Helmet>
      <h2 className="text-3xl font-semibold my-10 text-center">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {user.role === 'admin' ? 'admin' :
                     <button onClick={()=>handleMakeAdmin(user)} className="btn"><FaUserAlt></FaUserAlt></button>}
                </td>
                <td>
                    {user.role === 'instructor' ? 'instructor' :
                     <button onClick={()=>handleMakeInstructor(user)} className="btn"><FaUserAlt></FaUserAlt></button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
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

export default AllUsers;
