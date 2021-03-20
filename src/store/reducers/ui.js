import * as types from '../actions/actionTypes'

const initialState = {
  apiCalls: [
    { name: 'save-new-expense', loading: false, error: '' },
    { name: 'save-edit-expense', loading: false, error: '' },
    { name: 'remove-expense', loading: false, error: '' },
    { name: 'save-currency', loading: false, error: '' },
    { name: 'remove-category', loading: false, error: '' },
  ]
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.API_CALL_START:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            loading: true,
            error: ''
          }
        })
      }
    case types.API_CALL_FINISH_SUCCESS:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            name: action.payload.name,
            loading: false,
            error: ''
          }
        })
      }
    case types.API_CALL_FINISH_FAIL:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            name: action.payload.name,
            loading: false,
            error: {
              message: action.payload.error.message,
              errorData: action.payload.error.response.data
            }
          }
        })
      }
    default:
      return state
  }
}

export default uiReducer