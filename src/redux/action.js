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
      alert('Account Information Incorrect')
    }
  }
}

export function addLocation({ lat, lng }) {
  return async function (dispatch, getState) {
    try {
      const currentState = getState();
      await axios.post('/location', {
        lat,
        long: lng
      }, {
          headers: {
            authorization: currentState.tokenReducer.token
          }
        })
      dispatch({
        type: ADD_LOCATION,
        payload: {}
      })
    } catch (error) {
      console.log(error)
      alert('You must be logged in to use this feature.')
    }
  }
}
