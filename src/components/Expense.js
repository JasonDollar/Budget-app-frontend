import React from 'react'
import { useSelector } from 'react-redux'

const Expense = ({ expenseId }) => {
  const expense = useSelector(state => state.expenses.find(item => item._id === expenseId))
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
    </div>
  )
}

export default Expense
