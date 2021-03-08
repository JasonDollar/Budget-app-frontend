import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const List = styled.ul`
  list-style: none;
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
      <List className="margin-r-l">
        {expenses?.map(item => (
          <ExpenseListItem key={item._id} expense={item}/>
        ))}
      </List>
    </div>
  )
}

export default ExpensesList
