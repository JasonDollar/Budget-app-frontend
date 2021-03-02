import React from 'react'

const ExpenseListItem = ({expense}) => {
  return (
    <li>
      <h2>{expense.title}</h2>
      <p>{expense.amount}</p>
    </li>
  )
}

export default ExpenseListItem
