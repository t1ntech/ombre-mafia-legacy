
import React from "react";
import { Navigate } from "react-router-dom";

const Index: React.FC = () => {
  // Redirect to Auth page
  return <Navigate to="/auth" replace />;
};

export default Index;
