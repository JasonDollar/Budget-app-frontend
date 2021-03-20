import * as types from '../actions/actionTypes'

const initialState = {
  apiCalls: [{ name: 'save-new-expense', loading: false, error: '' }]
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.API_CALL_START:
      console.log(action)
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          console.log(item.name !== action.payload.name)
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
            name: action.payload.name,
            loading: false,
            error: action.payload.error
          }
        })
      }
    default:
      return state
  }
}

export default uiReducer