// import React from 'react';


import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/imges/cover/2.jpg';
import useClasses from "../../hooks/useClasses";


const Classes = () => {
    const [classData] =useClasses();


  return (
    <div>
       <Helmet>
        <title>Classes</title>
      </Helmet>
      <Cover
        img={img}
        title="Our Classes"
        description="Dancing makes me feel happy and relaxed, thus I love to dance. I always participate in dance competitions at my school and have even won a few. Dance became my passion from an early age. Listening to the beats of a dance number, I started to tap my feet and my parents recognized my talent for dance."
      />
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
