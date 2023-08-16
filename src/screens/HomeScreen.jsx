import { Badge } from "@aws-amplify/ui-react";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="home-spacing h-screen">
      <Badge>Home</Badge>
    </div>
  );
};

export default HomeScreen;
