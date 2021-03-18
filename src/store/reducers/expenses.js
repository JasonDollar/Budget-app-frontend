import * as types from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  expenses: [{
    _id: '603e8a3bc4e77e04d869c708',
    title: 'Pizza',
    amount: 4000,
    description: '123',
    owner: '603d436854bb723cac11917a',
    createdAt: '2021-03-02T18:55:55.542Z',
    updatedAt: '2021-03-02T18:55:55.542Z',
    expenseDate: '2021-03-02T18:55:55.542Z',
    category: 'other',
    __v: 0
  }, {
    _id: '603e8a3bc4e77e04d869c709',
    title: 'Second Pizza',
    amount: 4230,
    description: 'Note',
    owner: '603d436854bb723cac11917a',
    createdAt: '2021-03-12T18:55:55.542Z',
    updatedAt: '2021-03-12T18:55:55.542Z',
    expenseDate: '2021-03-12T18:55:55.542Z',
    category: 'other',
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
    case types.LOADING_EXPENSE_START:
      return {
        ...state,
        loading: true,
      }
    case types.CLEAR_EXPENSES:
      return {
        expenses: [],
        loading: false,
        error: ''
      }
    default:
      return state
  }
}

export default expenseReducer