import {
  LOGIN,
  ADD_LOCATION
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
      if (loginResponse.data.token) {
        history.push('/')
      }
      dispatch({
        type: LOGIN,
        payload: {
          token: `Bearer ${loginResponse.data.token}`,
          username: loginResponse.data.user.username
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
      if (loginResponse.data.token) {
        history.push('/')
      }
      dispatch({
        type: LOGIN,
        payload: {
          token: `Bearer ${loginResponse.data.token}`,
          username: loginResponse.data.user.username
        }
      })
    } catch (error) {
      console.log(error)
      alert('Get your shit together Florida Man!')
    }
  }
}

export function addLocation({ lat, long }, username) {
  return async function (dispatch, getState) {
    try {
      await axios.post('/login', {
        lat,
        long,
        username
      })
      dispatch({
        type: ADD_LOCATION,
        payload: {}
      })
    } catch (error) {
      console.log(error)
      alert('Will you get your shit together Florida Man?')
    }
  }
}
