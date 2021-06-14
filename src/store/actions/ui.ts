import * as types from './actionTypes'

export const apiCallStart = (name: string) => ({
  type: types.API_CALL_START,
  payload : { name }
})

export const apiCallFinishSuccess = (name: string) => ({
  type: types.API_CALL_FINISH_SUCCESS,
  payload : { name }
})

export const apiCallFinishFail = (name: string, error: any) => ({
  type: types.API_CALL_FINISH_FAIL,
  payload : { name, error }
})

export const updateFilter = (updates: any) => ({
  type: types.UPDATE_FILTER,
  payload: updates
})

export const showNotification = (message: string) => (dispatch: any) => {
  const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  dispatch({
    type: types.ADD_NOTIFICATION,
    payload: {
      id,
      message
    }
  })
  setTimeout(() => {
    dispatch(dismissNotification(id))
  }, 4000)
}

export const dismissNotification = (id: string) => ({
  type: types.REMOVE_NOTIFICATION,
  payload: id
})
