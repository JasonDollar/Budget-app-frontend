import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl, apiCallsNames as api } from '../../config/config'
import setAuthToken from '../../lib/setAuthToken'

import { setExpenses, clearExpenses } from './expenses'

import { apiCallStart, apiCallFinishSuccess, apiCallFinishFail } from './ui'

export const loadingUserStart = () => ({
  type: types.LOADING_USER_START,
})

const setUserToStore = (userData) => ({
  type: types.SET_USER_DATA,
  payload: userData
})

const clearUser = () => ({
  type: types.CLEAR_USER
})

export const getUserData = () => async dispatch => {
  try {
    dispatch(apiCallStart(api.fetchUser))
    const res = await axios.get(`${baseUrl}/users/userDetails`)
    if (res.statusText === 'OK') {
      const { user } = res.data
      dispatch(setUserToStore(user))
      dispatch(apiCallFinishSuccess(api.fetchUser))
    }
  } catch (e) {
    dispatch(apiCallFinishFail(api.fetchUser, e))
  }
}

export const loginUser = (email, password, history) => async dispatch => {
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
      history.push('/expenses')
    }
  } catch (e) {

  }
}

export const registerUser = (name, email, password, passwordConfirm, history) => async dispatch => {
  dispatch(loadingUserStart())
  dispatch(clearExpenses())
  try {
    const res = await axios.post(`${baseUrl}/users`, { name, email, password, passwordConfirm })

    if (res.statusText === 'Created') {
      const { userData } = res.data
      const { user, token } = userData
      dispatch(setUserToStore(user))
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      history.push('/expenses')
    }
  } catch (e) {

  }
}

export const logoutUser = (history) => async dispatch => {
  dispatch(loadingUserStart())
  const res = await axios.post(`${baseUrl}/users/logout`)

  if (res.statusText === 'OK') {
    dispatch(clearUser())
    dispatch(clearExpenses())
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    history.push('/')
  }
}

export const changeCurrency = (newCurrency, uiAction) => async dispatch => {
  dispatch(apiCallStart(uiAction))
  try {
    const res = await axios.patch(`${baseUrl}/users/currency`, { newCurrency })
    if (res.statusText === 'OK') {
      const { currency } = res.data
    
      dispatch({
        type: types.CHANGE_CURRENCY,
        payload: currency
      })
      dispatch(apiCallFinishSuccess(uiAction))
    }
  } catch (e) {
    dispatch(apiCallFinishFail(uiAction, e))
  }
}

export const removeCategory = (category, uiAction) => async dispatch => {
  dispatch(apiCallStart(uiAction))
  try {
    const res = await axios.delete(`${baseUrl}/users/category/${category}`)
    if (res.statusText === 'OK') {
      const { categories } = res.data
      dispatch({
        type: types.CHANGE_CATEGORIES,
        payload: categories
      })
      dispatch(apiCallFinishSuccess(uiAction))
    }
  } catch (e) {
    console.log(e.response)
    dispatch(apiCallFinishFail(uiAction, e))
  }
}