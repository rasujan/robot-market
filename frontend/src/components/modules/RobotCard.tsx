import React from "react";
import { robotDetails } from "../../types/robotTypes";

type props = {
  robot: robotDetails;
};
const RobotCard = ({ robot }: props) => {
  return (
    <div>
      <div className="flex flex-col shadow-2xl">
        <div>
          <img src={robot.image} alt={robot.name} />
        </div>
        <div>
          <h1> {robot.name} </h1>
        </div>
      </div>
    </div>
  );
};

export default RobotCard;
