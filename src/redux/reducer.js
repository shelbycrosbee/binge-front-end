import { combineReducers } from "redux";
import { TEST } from "./actionTypes";

const initialState = {
  user: null
};

const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case TEST: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    default:
      return state;
  }
}

export default combineReducers({ userReducer });
