import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const List = styled.ul`
  list-style: none;
  margin: 0 1.5rem;
  padding: 0;
`


const ExpensesList = () => {
  const expenses = useSelector(state => state.expenses.expenses)
  const expensesLoading = useSelector(state => state.expenses.loading)

  if (expensesLoading) {
    return <div>Loading</div>
  }
  return (
    <div>
      <List>
        {expenses?.map(item => (
          <ExpenseListItem key={item._id} expense={item}/>
        ))}
      </List>
    </div>
  )
}

export default ExpensesList
