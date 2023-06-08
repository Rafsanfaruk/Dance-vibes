import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const UpcomingEvents = () => {
  return (
    <section>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            heading="Upcoming Events"
            subHeading="Join us for exciting dance events"
          />
          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <img
                  src="https://i.ibb.co/example-event1.jpg"
                  alt="Event 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Dance Showcase 2023
                </h3>
                <p className="text-gray-600">
                  Date: January 15, 2023
                  <br />
                  Time: 7:00 PM
                  <br />
                  Location: Dance Theater
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <img
                  src="https://i.ibb.co/example-event2.jpg"
                  alt="Event 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Hip Hop Workshop</h3>
                <p className="text-gray-600">
                  Date: February 10, 2023
                  <br />
                  Time: 6:00 PM
                  <br />
                  Location: Dance Studio B
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <img
                  src="https://i.ibb.co/example-event3.jpg"
                  alt="Event 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Ballet Masterclass</h3>
                <p className="text-gray-600">
                  Date: March 5, 2023
                  <br />
                  Time: 5:30 PM
                  <br />
                  Location: Grand Ballroom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
