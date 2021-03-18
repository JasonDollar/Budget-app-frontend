import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl } from '../../config/apiUrl'
// import history from '../../lib/history'

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