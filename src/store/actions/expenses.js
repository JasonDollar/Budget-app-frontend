import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl } from '../../config/apiUrl'

const setExpenses = expenses => ({
  type: types.SET_EXPENSES,
  payload: expenses
})

export const setExpensesToStore = () => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/expenses`)
    if (res.statusText === 'OK') {
      const expenses = res.data.expenses
       dispatch(setExpenses(expenses))
    }
  } catch (e) {
    console.log(e.message)
  }
}

const addExpense = (expense) => ({
  type: types.ADD_EXPENSE,
  payload: expense
})

export const addExpenseToStore = (expenseData) => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/expenses`, expenseData)
    if (res.statusText === 'Created') {
      const expense = res.data.expense
       dispatch(addExpense(expense))
    }
  } catch (e) {

  }
}