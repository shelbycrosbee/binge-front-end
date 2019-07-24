import {
  REGISTER_USER, LOGIN
} from "./actionTypes";
import axios from 'axios';



export function userRegister({ username, email, password }) {
  return async function (dispatch, getState) {
    try {
      const loginResponse = await axios.post('/register', {
        username,
        email,
        password 
      })

      dispatch({
        type: LOGIN,
        payload: {token:`Bearer ${loginResponse.data[1].token}`}
      })
    } catch (error) {
      console.log(error)
    }
  }
}



export function userLogin({ email, password }, history) {
  return async function (dispatch, getState) {
    try {
      const loginResponse = await axios.post('/login', {
        email,
        password 
      })
      if (loginResponse.data[0].token) {
        history.push('/')
      }
      dispatch({
        type: LOGIN,
        payload: {token:`Bearer ${loginResponse.data[0].token}`}
      })
    } catch (error) {
      console.log(error)
      alert('Get your shit together Florida Man!')
    }
  }
}

// export function userToken({ email, password, token }) {
//   return async function (dispatch, getState) {
//     try {
//       await axios.post('/login', {}
