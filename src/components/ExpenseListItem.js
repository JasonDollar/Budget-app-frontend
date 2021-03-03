import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({expense}) => {
  return (
    <li>
      <Link to={`/expenses/${expense._id}`}>
        <h2>{expense.title}</h2>
        <p>{expense.amount}</p>
      </Link>
    </li>
  )
}

export default ExpenseListItem
