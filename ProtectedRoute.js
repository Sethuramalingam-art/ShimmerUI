import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  //auth logic
  //write api and do login access logic
  const isAuth = false; // do logic and check if it true return to children route(details) or redirect to login page
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
