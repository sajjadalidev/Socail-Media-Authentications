import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getUserInfo } from "../../helpers/localStorage";

const PrivateComponent = () => {
  const user = getUserInfo();
  console.log(
    "🚀 ~ file: ProtectedRoute.jsx:7 ~ PrivateComponent ~ user",
    user
  );
  !!user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
