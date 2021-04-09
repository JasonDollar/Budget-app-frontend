import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { apiCallsNames as api } from '../config/config'

import { selectAllExpenses } from '../store/selectors/expenses'
import { selectSingleApiCall } from '../store/selectors/ui'

import ExpenseListItem from './ExpenseListItem'
import Loading from './styles/Loading'
import ErrorMessage from './ErrorMessage'
import List from './styles/List'

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
      {expensesApi.error && <ErrorMessage error={expensesApi.error} />}
    </div>
  )
}

export default ExpensesList
