import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../../redux";
import { robotDetails } from "../../types/robotTypes";
import RobotCard from "./RobotCard";

const Robot = ({ robotData, fetchRobots }: any) => {
  useEffect(() => {
    fetchRobots();
  }, [fetchRobots]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {robotData.robots &&
        robotData?.robots?.data?.map((robotData: robotDetails) => (
          <RobotCard robot={robotData} />
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    robotData: state.robot,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Robot);
