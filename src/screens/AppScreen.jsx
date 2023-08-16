import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppScreen = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Outlet />
    </>
  );
};

export default AppScreen;
