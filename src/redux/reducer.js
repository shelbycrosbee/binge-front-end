import { combineReducers } from "redux";
import { LOGIN, REGISTER_USER } from "./actionTypes";

const initialState = {
  user: null
};

const initialTokenState = { token: null }

const tokenReducer = function (state = initialTokenState, action) {
  switch (action.type) {

    case LOGIN: {
      return {
        ...state,
        token: action.payload.token
      }
    }
    default:
      return state;
  }
}

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ userReducer, tokenReducer });
