import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { removeExpense } from '../store/actions/expenses'

const Expense = ({ expenseId }) => {
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const dispatch = useDispatch()
  const history = useHistory()

  const removeExpenseHandler = () => {
    dispatch(removeExpense(expenseId))
    history.push('/expenses')
  }
  // console.log(expense)
  if (!expense) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div>
      <h2>{expense.title}</h2>
      <p>{expense.amount}</p>
      <button onClick={removeExpenseHandler}>X</button>
    </div>
  )
}

export default Expense
