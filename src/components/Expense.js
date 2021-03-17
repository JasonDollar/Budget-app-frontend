import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeExpense } from '../store/actions/expenses'
import formatMoney from '../lib/formatMoney'

import Loading from './styles/Loading'
import BigButton from './styles/BigButton'


const Expense = ({ expenseId }) => {
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const dispatch = useDispatch()

  const removeExpenseHandler = () => {
    dispatch(removeExpense(expenseId))
  }
  
  if (!expense) {
    return (
      <Loading />
    )
  }
  return (
    <div className="margin-r-l">
      <h2>{expense.title}</h2>
      <p>{formatMoney(expense.amount)}</p>
      <BigButton onClick={removeExpenseHandler} danger fontSize={1.2}>
        Delete
      </BigButton>
      <Link to={`/expenses/edit/${expenseId}`}>
        <BigButton alert fontSize={1.2}>
        Edit
        </BigButton>
      </Link>
    </div>
  )
}

export default Expense
