import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'date-fns'

import formatMoney from '../lib/formatMoney'
import { useSelector } from 'react-redux'

import { selectUserSettings } from '../store/selectors/user'

const ListItem = styled.li`
  margin: 1rem 0;
  padding: 1.2rem 1rem;
  border-radius: 1rem;

  background: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  .expenseLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .expense {
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .amount {
    color: ${props => props.theme.mainThemeColor};
    font-size: 2rem;
  }

  .date {
    font-size: 1.2rem;
    color: ${props => props.theme.textGreyColor};
  }
`

const ExpenseListItem = ({expense}) => {
  const { currency, locale } = useSelector(selectUserSettings)

  return (
    <ListItem>
      <Link to={`/expenses/${expense._id}`} className="expenseLink">
        <h2 className="expense">{expense.title}</h2>
        <div className="details">
          <p className="amount">{formatMoney(expense.amount, currency, locale)}</p>
          <p className="date">{expense.expenseDate && format(new Date(expense.expenseDate), 'd LLL')}</p>
        </div>
      </Link>
    </ListItem>
  )
}

export default ExpenseListItem
