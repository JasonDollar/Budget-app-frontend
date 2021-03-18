import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl } from '../../config/apiUrl'
import history from '../../lib/history'

// import { loadingStart } from './shared'

export const loadingExpenseStart = () => ({
  type: types.LOADING_EXPENSE_START,
})

const setExpensesToStore = expenses => ({
  type: types.SET_EXPENSES,
  payload: expenses
})

export const clearExpenses = () => ({
  type: types.CLEAR_EXPENSES
})

export const setExpenses = () => async dispatch => {
  try {
    dispatch(loadingExpenseStart())
    const res = await axios.get(`${baseUrl}/expenses`)
    if (res.statusText === 'OK') {
      const expenses = res.data.expenses
       dispatch(setExpensesToStore(expenses))
    }
  } catch (e) {
    console.log(e.message)
  }
}

const addExpenseToStore = (expense) => ({
  type: types.ADD_EXPENSE,
  payload: expense
})

export const addExpense = (expenseData) => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/expenses`, expenseData)
    if (res.statusText === 'Created') {
      const expense = res.data.expense
      dispatch(addExpenseToStore(expense))
      history.push('/expenses')
    }
  } catch (e) {
    // add error handling
    console.log(e.response)
    console.log(e.message)
  }
}

const removeExpenseFromStore = id => ({
  type: types.REMOVE_EXPENSE,
  payload: id
})

export const removeExpense = (id) => async dispatch => {
  try {
    const res = await axios.delete(`${baseUrl}/expenses/${id}`)
    console.log(res)
    if (res.statusText === 'OK') {
      dispatch(removeExpenseFromStore(id))
      history.push('/expenses')
    }
  } catch (e) {

  }
}


const editExpenseInStore = expense => ({
  type: types.EDIT_EXPENSE,
  payload: expense
})

export const editExpense = (id, updates) => async dispatch => {
  dispatch(loadingExpenseStart())
  try {
    const res = await axios.patch(`${baseUrl}/expenses/${id}`, updates)
    // console.log(res)
    if (res.statusText === 'OK') {
      dispatch(editExpenseInStore(res.data.expense))
      history.push('/expenses')
    }
  } catch (e) {

  }
}