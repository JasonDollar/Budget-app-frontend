import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
  margin: 1rem 0;
  padding: 1.5rem 1rem;
  /* border: 1px solid red; */
  border-radius: 1rem;

  background: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  .expenseLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin: 0;
  }
`

const ExpenseListItem = ({expense}) => {
  return (
    <ListItem>
      <Link to={`/expenses/${expense._id}`} className="expenseLink">
        <h2>{expense.title}</h2>
        <p>{expense.amount}</p>
      </Link>
    </ListItem>
  )
}

export default ExpenseListItem
