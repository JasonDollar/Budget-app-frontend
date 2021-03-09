import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeExpense } from '../store/actions/expenses'
import formatMoney from '../lib/formatMoney'

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
      <p>{formatMoney(expense.amount)}</p>
      <button onClick={removeExpenseHandler}>X</button>
      <Link to={`/expenses/edit/${expenseId}`}>
        Edit
      </Link>
    </div>
  )
}

export default Expense
