import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeExpense } from '../store/actions/expenses'

const Expense = ({ expenseId }) => {
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const dispatch = useDispatch()

  const removeExpenseHandler = () => {
    dispatch(removeExpense(expenseId))
  }
  
  if (!expense) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div className="margin-r-l">
      <h2>{expense.title}</h2>
      <p>{expense.amount}</p>
      <button onClick={removeExpenseHandler}>X</button>
    </div>
  )
}

export default Expense
