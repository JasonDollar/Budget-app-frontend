import * as types from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  expenses: [{
    _id: '603e8a3bc4e77e04d869c708',
    title: 'Pizza',
    amount: 40,
    description: '123',
    owner: '603d436854bb723cac11917a',
    createdAt: '2021-03-02T18:55:55.542Z',
    updatedAt: '2021-03-02T18:55:55.542Z',
    __v: 0
  }]
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
    case types.EDIT_EXPENSE:
      const mappedExpenses = state.expenses.map(item => {
        if (item._id === action.payload._id) {
          return action.payload
        }
        return item
      })
      return {
        loading: false,
        error: '',
        expenses: mappedExpenses
      }
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default expenseReducer