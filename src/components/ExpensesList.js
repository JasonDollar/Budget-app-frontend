import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectAllExpenses } from '../store/selectors/expenses'

import ExpenseListItem from './ExpenseListItem'
import Loading from './styles/Loading'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ExpensesList = () => {
  const expenses = useSelector(selectAllExpenses)
  const expensesLoading = useSelector(state => state.expenses.loading)

  if (expensesLoading) {
    return <Loading />
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
