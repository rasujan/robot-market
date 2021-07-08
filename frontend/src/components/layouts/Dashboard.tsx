import React from "react";
import Navbar from "./Navbar";
import Robot from "../modules/RobotContainer";
import CartConatiner from "./CartConatiner";
const Dashboard = () => {
  return (
    <div className="absoulte">
      <Navbar />
      <div className="absoulte flex justify-around">
        <Robot />
        <CartConatiner />
      </div>
    </div>
  );
};

export default Dashboard;
