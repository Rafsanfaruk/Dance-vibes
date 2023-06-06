// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <NavBar></NavBar>
        <Outlet />
      </div>
      <Footer className="fixed bottom-0 w-full" />
    </div>
  );
};

export default Main;
