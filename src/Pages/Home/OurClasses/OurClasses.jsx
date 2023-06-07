import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurClasses = () => {
  const [danceClasses, setDanceClasses] = useState([]);

  useEffect(() => {
    const fetchDanceClasses = async () => {
      try {
        const response = await fetch("danceClasses.json");
        const data = await response.json();
        setDanceClasses(data);
      } catch (error) {
        console.error("Error fetching dance classes:", error);
      }
    };

    fetchDanceClasses();
  }, []);

  // Sort the dance classes based on the number of students
  const sortedClasses = danceClasses.sort((a, b) => b.students - a.students);

  return (
    <section>
      <SectionTitle heading="Our Classes" subHeading="Choose your style" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sortedClasses.map((classItem) => (
          <div key={classItem._id} className="bg-white p-4 rounded shadow">
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{classItem.title}</h3>
            <p>Students: {classItem.students}</p>
            <button className="my-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClasses;
