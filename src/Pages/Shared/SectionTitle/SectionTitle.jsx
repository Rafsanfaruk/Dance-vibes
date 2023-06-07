// import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8 ">
      <h3 className="text-3xl uppercase py-4">{heading}</h3>
      <p className="text-amber-500 mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
