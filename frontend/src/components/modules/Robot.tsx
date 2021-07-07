import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../../redux";

const Robot = ({ robotData, fetchRobots }: any) => {
  useEffect(() => {
    fetchRobots();
  }, [fetchRobots]);

  return (
    <div>
      Robots
      {robotData.robots &&
        robotData?.robots?.data.map((robots: any) => <h1> {robots.name}</h1>)}
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
