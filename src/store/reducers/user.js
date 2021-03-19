import * as types from '../actions/actionTypes'

const initialState = {
  loadingUser: false,
  errorUser: '',
  userData: {
    settings: {
      currency: 'USD',
      locale: 'en-US'
    }
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_USER_START:
      return {
        ...state,
        error: '',
        loadingUser: true,
      }
    case types.SET_USER_DATA:
      return {
        ...state,
        loadingUser: false,
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
    default:
      return state
  }
}

export default userReducer