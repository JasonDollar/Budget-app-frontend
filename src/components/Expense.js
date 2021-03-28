import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns'

import { removeExpense } from '../store/actions/expenses'
import { selectUserSettings } from '../store/selectors/user'
import { selectSingleExpense } from '../store/selectors/expenses'
import { selectSingleApiCall } from '../store/selectors/ui'
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
`

const Expense = ({ expenseId }) => {
  const { loading, error } = useSelector(state => selectSingleApiCall('remove-expense')(state))
  const expense = useSelector(state => selectSingleExpense(expenseId)(state))
  const { currency, locale } = useSelector(selectUserSettings)
  const dispatch = useDispatch()

  const removeExpenseHandler = () => {
    dispatch(removeExpense(expenseId, 'remove-expense'))
  }
  
  if (!expense || !currency) {
    return (
      <Loading />
    )
  }
  return (
    <ExpenseContainer className="margin-r-l">
      <h2 className="title">{expense.title}</h2>
      <p>Amount: {formatMoney(expense.amount, currency, locale)}</p>
      <p>Date: {format(new Date(expense.expenseDate), 'd LLL')}</p>
      <p>Category: {expense.category}</p>
      <p>{expense?.description}</p>
      <ButtonsContainer buttons={2}>
        <BigButton alert fontSize={1.2} >
          <Link to={`/expenses/edit/${expenseId}`}>
            Edit
          </Link>
        </BigButton>
        <BigButton onClick={removeExpenseHandler} danger fontSize={1.2} disabled={loading}>
          Delete
        </BigButton>
      </ButtonsContainer>
      {loading && <span>Removing</span>}
    </ExpenseContainer>
  )
}

export default Expense
