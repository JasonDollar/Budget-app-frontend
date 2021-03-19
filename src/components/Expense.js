import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns'

import { removeExpense } from '../store/actions/expenses'
import formatMoney from '../lib/formatMoney'

import Loading from './styles/Loading'
import { BigButton, ButtonsContainer } from './styles/BigButton'

const ExpenseContainer = styled.div`
  .title {
    text-align: center;
  }
  p {
    margin: .5rem 0;
  }

  /* .buttons {
    display: flex;
    justify-content: space-between;
    @media(min-width: 576px) {
      justify-content: center;
    }
    & > * {
      width: 45%;
      @media(min-width: 576px) {
        width: 20%;
        margin: 0 2rem;
      }
    }
    a {
      display: block;
      width: 100%;
    } */
  /* } */
`

const Expense = ({ expenseId }) => {
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const currency = useSelector(state => state.user.userData.settings.currency)
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
    <ExpenseContainer className="margin-r-l">
      <h2 className="title">{expense.title}</h2>
      <p>Amount: {formatMoney(expense.amount, currency)}</p>
      <p>Date: {format(new Date(expense.expenseDate), 'd LLL')}</p>
      <p>Category: {expense.category}</p>
      <p>{expense?.description}</p>
      <ButtonsContainer buttons={2}>
        <BigButton alert fontSize={1.2} >
          <Link to={`/expenses/edit/${expenseId}`}>
            Edit
          </Link>
        </BigButton>
        <BigButton onClick={removeExpenseHandler} danger fontSize={1.2} >
          Delete
        </BigButton>
      </ButtonsContainer>
    </ExpenseContainer>
  )
}

export default Expense
