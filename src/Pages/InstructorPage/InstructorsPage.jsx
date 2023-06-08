
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/imges/cover/1.jpg';
import useInstructors from '../../hooks/useInstructors';

const InstructorsPage = () => {
  const [instructorsData] =useInstructors();
  return (
    <div>
      <Helmet>Instructor</Helmet>
      <Cover
        img={img}
        title="Our Instructors"
        description="Dancing makes me feel happy and relaxed, thus I love to dance. I always participate in dance competitions at my school and have even won a few. Dance became my passion from an early age. Listening to the beats of a dance number, I started to tap my feet and my parents recognized my talent for dance."
      />
      <SectionTitle heading="Our Instructors" subHeading="Your Instructors" />
      
      <div className="grid grid-cols-3 gap-4 mt-8">
        {instructorsData.map((instructor) => (
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
