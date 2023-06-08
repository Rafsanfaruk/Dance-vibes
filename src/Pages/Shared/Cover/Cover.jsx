// import React from 'react';
import PropTypes from 'prop-types';

const Cover = ({ img, title, description }) => {
  return (
    <div
      className="hero h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cover;
