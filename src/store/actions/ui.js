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

export const updateFilter = updates => ({
  type: types.UPDATE_FILTER,
  payload: updates
})

export const showNotification = (message) => dispatch => {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  dispatch({
    type: types.ADD_NOTIFICATION,
    payload: {
      id,
      message
    }
  })
  setTimeout(() => {
    dispatch({
      type: types.REMOVE_NOTIFICATION,
      payload: id
    })
  }, 4000)
}



// ({
//   type: types.ADD_NOTIFICATION,
//   id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//   message
// })