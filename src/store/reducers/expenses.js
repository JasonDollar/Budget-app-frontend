import * as types from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  expenses: []
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPENSES:
      return {
        loading: false,
        error: '',
        expenses: action.payload
      }
    case types.ADD_EXPENSE:
      return {
        loading: false,
        error: '',
        expenses: [...state.expenses, action.payload]
      }
    case types.REMOVE_EXPENSE:
      const filteredExpenses = state.expenses.filter(item => item._id !== action.payload)
      return {
        loading: false,
        error: '',
        expenses: filteredExpenses
      }
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
      }
    default:
      console.log('default')
      return state
  }
}

export default expenseReducer