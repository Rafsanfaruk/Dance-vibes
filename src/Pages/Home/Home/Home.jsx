// import React from 'react';


import OurClasses from "../OurClasses/OurClasses";
import Slider from "../Slider/Slider";
import Instructor from "./Instructor/Instructor";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      
      <Slider></Slider>
      <OurClasses></OurClasses>
      <Instructor></Instructor>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Home;
