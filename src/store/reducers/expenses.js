import * as types from '../actions/actionTypes'

const initialState = []

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPENSES:
      return action.payload
    case types.ADD_EXPENSE:
      return [...state, action.payload]
    case types.REMOVE_EXPENSE:
      return state.filter(item => item._id !== action.payload)
    default:
      return state
  }
}

export default expenseReducer