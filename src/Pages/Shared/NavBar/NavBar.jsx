// import React from 'react';

import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-4 mb-10">
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            Dance Vibes
          </Link>
          <button
            className="ml-4 text-white block lg:hidden"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
        <div
          className={`lg:flex items-center ${isMenuOpen ? "block" : "hidden"}`}
        >
          <Link to="/" className="text-white mt-4 lg:mt-0 lg:ml-4 block">
            Home
          </Link>
          <Link
            to="/instructors"
            className="text-white mt-4 lg:mt-0 lg:ml-4 block"
          >
            Instructors
          </Link>
          <Link to="/classes" className="text-white mt-4 lg:mt-0 lg:ml-4 block">
            Classes
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white mt-4 lg:mt-0 lg:ml-4 block"
              >
                Dashboard
              </Link>
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full mt-4 lg:mt-0 lg:ml-4"
              />
              <button
                onClick={logOut}
                className="text-white ml-4 focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-white mt-4 lg:mt-0 lg:ml-4 block">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

