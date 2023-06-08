// import React from 'react';


import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useInstructors from "../../../../hooks/useInstructors";

const Instructor = () => {
  const [instructorsData] =useInstructors();
  const sortedInstructors = instructorsData.sort((a, b) => b.students - a.students);

  // Get the top 6 instructors
  const topInstructors = sortedInstructors.slice(0, 6);

  return (
    <section>
      <SectionTitle
        heading="Popular Instructors"
        subHeading="Meet our talented instructors"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topInstructors.map((instructor) => (
          <div key={instructor._id} className="bg-white p-4 rounded shadow">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-36 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{instructor.name}</h3>
            <p>Students: {instructor.students}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
