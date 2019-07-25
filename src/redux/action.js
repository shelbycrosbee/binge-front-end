import {
  LOGIN
} from "./actionTypes";
import axios from 'axios';



export function userRegister({ username, email, password }, history) {
  return async function (dispatch, getState) {
    try {
      const loginResponse = await axios.post('/register', {
        username,
        email,
        password
      })
      if (loginResponse.data[1].token) {
        history.push('/')
      }
      dispatch({
        type: LOGIN,
        payload: {
          token: `Bearer ${loginResponse.data[1].token}`,
          user: loginResponse.data[0].username
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}



export function userLogin({ email, password, username }, history) {
  return async function (dispatch, getState) {
    try {
      const loginResponse = await axios.post('/login', {
        email,
        password,
        username
      })
      if (loginResponse.data[0].token) {
        history.push('/')
      }
      dispatch({
        type: LOGIN,
        payload: {
          token: `Bearer ${loginResponse.data[0].token}`
        }
      })
    } catch (error) {
      console.log(error)
      alert('Get your shit together Florida Man!')
    }
  }
}


