import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl } from '../../config/apiUrl'

const setExpensesToStore = expenses => ({
  type: types.SET_EXPENSES,
  payload: expenses
})

export const setExpenses = () => async dispatch => {
  try {
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
    }
  } catch (e) {

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
      
    }
  } catch (e) {

  }
}