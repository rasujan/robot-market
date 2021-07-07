import {
  FETCH_ROBOTS_REQUEST,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE,
} from "./robotTypes";

const initialState = {
  loading: false,
  robots: [],
  error: "",
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_ROBOTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROBOTS_SUCCESS:
      return {
        loading: false,
        robots: action.payload,
        error: "",
      };
    case FETCH_ROBOTS_FAILURE:
      return {
        loading: false,
        robots: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
