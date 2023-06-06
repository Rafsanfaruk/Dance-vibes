// import React from 'react';

import { Link } from "react-router-dom";
import errorPic from '../../assets/cat.png'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
          src={errorPic}
          alt="404 Error"
          className="w-64 h-auto mb-8 animate-bounce"
        />
        <h1 className="text-4xl text-gray-800 font-bold mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    );
};

export default ErrorPage;