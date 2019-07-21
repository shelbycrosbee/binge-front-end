import {
  REGISTER_USER
} from "./actionTypes";
import axios from 'axios';


export function userRegister(e) {
  return async function (dispatch, getState) {
    try {
        e.preventDefault();
      debugger;
      await axios.post('/register', {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      })

      dispatch({
        type: REGISTER_USER,
        data: {}
      })
    } catch (error) {
      console.log(error)
    }
  }
}