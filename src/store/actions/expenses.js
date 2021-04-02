import axios from 'axios'
import * as types from './actionTypes'
import { baseUrl, apiCallsNames as api } from '../../config/config'
import history from '../../lib/history'

import { apiCallStart, apiCallFinishSuccess, apiCallFinishFail } from './ui'

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
    dispatch(apiCallStart(api.fetchExpenses))
    const res = await axios.get(`${baseUrl}/expenses`)
    if (res.statusText === 'OK') {
      const expenses = res.data.expenses
      dispatch(setExpensesToStore(expenses))
      dispatch(apiCallFinishSuccess(api.fetchExpenses))
    }
  } catch (e) {
    console.log(e.message)
    dispatch(setExpensesToStore([]))
    dispatch(apiCallFinishFail(api.fetchExpenses, e))
  }
}

const addExpenseToStore = (expense) => ({
  type: types.ADD_EXPENSE,
  payload: expense
})

export const addExpense = (expenseData, uiAction) => async dispatch => {
  dispatch(apiCallStart(uiAction))

  try {
    const res = await axios.post(`${baseUrl}/expenses`, expenseData)
    if (res.statusText === 'Created') {
      const expense = res.data.expense
      dispatch(addExpenseToStore(expense))
      dispatch(apiCallFinishSuccess(uiAction))
      history.push('/expenses')
    }
  } catch (e) {
    dispatch(apiCallFinishFail(uiAction, e))
    // add error handling
    console.log(e.response)
    console.log(e.message)
  }
}

const removeExpenseFromStore = id => ({
  type: types.REMOVE_EXPENSE,
  payload: id
})

export const removeExpense = (id, uiAction) => async dispatch => {
  dispatch(apiCallStart(uiAction))
  try {
    const res = await axios.delete(`${baseUrl}/expenses/${id}`)

    if (res.statusText === 'OK') {
      dispatch(removeExpenseFromStore(id))
      dispatch(apiCallFinishSuccess(uiAction))
      history.push('/expenses')
    }
  } catch (e) {
    dispatch(apiCallFinishFail(uiAction, e))
  }
}


const editExpenseInStore = expense => ({
  type: types.EDIT_EXPENSE,
  payload: expense
})

export const editExpense = (id, updates, uiAction) => async dispatch => {
  dispatch(apiCallStart(uiAction))
  dispatch(loadingExpenseStart())
  try {
    const res = await axios.patch(`${baseUrl}/expenses/${id}`, updates)

    if (res.statusText === 'OK') {
      dispatch(editExpenseInStore(res.data.expense))
      dispatch(apiCallFinishSuccess(uiAction))
      history.push('/expenses')
    }
  } catch (e) {
    dispatch(apiCallFinishFail(uiAction, e))
  }
}