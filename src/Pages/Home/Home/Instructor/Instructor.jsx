// import React from 'react';



import useInstructor from "../../../../hooks/useInstructors";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Instructor = () => {
  const [isInstructor] = useInstructor();

  // Check if instructorsData is defined
  if (!isInstructor) {
    return null;
  }

  // // Get the top 6 instructors by iterating through the array
  // const topInstructors = isInstructor.reduce((acc, instructor) => {
  //   if (acc.length < 6) {
  //     acc.push(instructor);
  //   }
  //   return acc;
  // }, []);

  return (
    <section>
      <SectionTitle
        heading="Popular Instructors"
        subHeading="Meet our talented instructors"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* {topInstructors.map((instructor) => (
          <div key={instructor._id} className="bg-white p-4 rounded shadow">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-36 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{instructor.name}</h3>
            <p>Students: {instructor.students}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Instructor;
