import * as types from './actionTypes'

export const apiCallStart = (name) => ({
  type: types.API_CALL_START,
  payload : { name }
})

export const apiCallFinishSuccess = (name) => ({
  type: types.API_CALL_FINISH_SUCCESS,
  payload : { name }
})

export const apiCallFinishFail = (name, error) => ({
  type: types.API_CALL_FINISH_FAIL,
  payload : { name, error }
})