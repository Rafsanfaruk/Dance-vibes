import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/imges/cover/1.jpg';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('http://localhost:5000/instructor');
        const data = await response.json();
        setInstructors(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching instructors:', error);
        setIsLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Instructors</title>
      </Helmet>
      <Cover
        img={img}
        title="Our Instructors"
        description="Dancing makes me feel happy and relaxed, thus I love to dance. I always participate in dance competitions at my school and have even won a few. Dance became my passion from an early age. Listening to the beats of a dance number, I started to tap my feet and my parents recognized my talent for dance."
      />
      <SectionTitle heading="Our Instructors" subHeading="Your Instructors" />
      
      <div className="grid grid-cols-3 gap-4 mt-8">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-white rounded-lg shadow p-6">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
            <p className="text-gray-600 mb-4">{instructor.email}</p>
            {instructor.classesTaken && (
              <div>
                <h4 className="text-sm font-semibold mb-2">Classes Taken:</h4>
                <ul className="mb-4">
                  {instructor.classesTaken.map((className) => (
                    <li key={className} className="text-gray-600">{className}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="my-btn"
              disabled={instructor.availableSeats === 0 || instructor.isAdmin}
            >
              See Classes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
