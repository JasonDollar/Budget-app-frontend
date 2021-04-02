import * as types from '../actions/actionTypes'

const initialState = {
  userData: {
    settings: {
      currency: 'USD',
      locale: 'en-US'
    }
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      }
    case types.CLEAR_USER:
      return initialState
    case types.CHANGE_CURRENCY:
      return {
        ...state,
        userData: {
          ...state.userData,
          settings: action.payload
        }
      }
    case types.CHANGE_CATEGORIES:
      return {
        ...state,
        userData: {
          ...state.userData,
          categories: action.payload
        }
      }
    default:
      return state
  }
}

export default userReducer