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