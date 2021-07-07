import axios from "axios";

import {
  FETCH_ROBOTS_REQUEST,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE,
} from "./robotTypes";

export const fetchRobots = () => {
  return (dispatch: Function) => {
    dispatch(fetchRobotsRequest());
    axios
      .get("http://localhost:8000/api/robots")
      .then((res) => {
        const robots = res.data;
        dispatch(fetchRobotsSuccess(robots));
      })
      .catch((err) => {
        dispatch(
          fetchRobotsFailure(
            `🤦‍♀️ Something Went Wrong 🤦‍♂️ : ${err.response.status}`
          )
        );
      });
  };
};

export const fetchRobotsRequest = () => {
  return {
    type: FETCH_ROBOTS_REQUEST,
  };
};

export const fetchRobotsSuccess = (robots: {}[]) => {
  return {
    type: FETCH_ROBOTS_SUCCESS,
    payload: robots,
  };
};

export const fetchRobotsFailure = (err: string) => {
  return {
    type: FETCH_ROBOTS_FAILURE,
    payload: err,
  };
};
