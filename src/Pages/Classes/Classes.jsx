// import React from 'react';

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";

const Classes = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("classes.json");
        const data = await response.json();
        setClassData(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <Helmet>Our Classes</Helmet>
      <Cover></Cover>
      <SectionTitle heading="CLASSES" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {classData.map((classItem) => (
          <div
            key={classItem._id}
            className={`bg-white p-4 rounded shadow ${
              classItem.availableSeats === 0 ? "bg-red-500" : ""
            }`}
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{classItem.name}</h3>
            <p>Instructor: {classItem.instructor}</p>
            <p>Available Seats: {classItem.availableSeats}</p>
            <p>Price: ${classItem.price}</p>
            <button
              className="my-btn"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
