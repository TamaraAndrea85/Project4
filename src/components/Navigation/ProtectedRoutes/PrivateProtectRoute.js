import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../../../App";
import Login from "../../Users/Login/Login";

export const PrivateProtectRoute = ({ component: App, ...rest }) => {
  //check if user is loggin
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;
  return (
    <Routes>
      userAuth ?
      <Route path="/" element={<App />} />
      :
      <Route path="/login" element={<Login />} />
      {/* {...rest} */}
    </Routes>
  );
};
