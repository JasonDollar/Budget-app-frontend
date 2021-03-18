import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl } from '../../config/apiUrl'
import setAuthToken from '../../lib/setAuthToken'

import { setExpenses } from './expenses'
// import { loadingStart } from './shared'


export const loadingUserStart = () => ({
  type: types.LOADING_USER_START,
})

const setUserToStore = (userData) => ({
  type: types.SET_USER_DATA,
  payload: userData
})

export const getUserData = () => async dispatch => {
  try {
    dispatch(loadingUserStart())
    const res = await axios.get(`${baseUrl}/users/userDetails`)
    if (res.statusText === 'OK') {
      const { user } = res.data
       dispatch(setUserToStore(user))
    }
  } catch (e) {}
}

export const loginUser = (email, password) => async dispatch => {
  dispatch(loadingUserStart())
  try {
    const res = await axios.post(`${baseUrl}/users/login`, { email, password })
    if (res.statusText === 'OK') {
      const { userData } = res.data
      const { user, token } = userData
      dispatch(setUserToStore(user))
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      dispatch(setExpenses())
    }
  } catch (e) {

  }
}