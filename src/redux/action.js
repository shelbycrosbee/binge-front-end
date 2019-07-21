import {
  REGISTER_USER, LOGIN
} from "./actionTypes";
import axios from 'axios';



export function userRegister({ username, email, password }) {
  return async function (dispatch, getState) {
    try {
      await axios.post('/register', {
        username,
        email,
        password 
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



export function userLogin({ email, password }) {
  return async function (dispatch, getState) {
    try {
      await axios.post('/login', {
        email,
        password 
      })

      dispatch({
        type: LOGIN,
        data: {}
      })
    } catch (error) {
      console.log(error)
    }
  }
}