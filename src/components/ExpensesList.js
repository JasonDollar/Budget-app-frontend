import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { apiCallsNames as api } from '../config/config'

import { selectAllExpenses } from '../store/selectors/expenses'
import { selectSingleApiCall } from '../store/selectors/ui'

import ExpenseListItem from './ExpenseListItem'
import Loading from './styles/Loading'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ExpensesList = () => {
  const expenses = useSelector(selectAllExpenses)
  const expensesApi = useSelector(state => selectSingleApiCall(api.fetchExpenses)(state))

  if (expensesApi.loading) {
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
