import React from 'react'
import ExpensesList from '../components/ExpensesList'
import Filter from '../components/Filter'

const ExpensesPage = () => {
  return (
    <div>
      <Filter />
      <ExpensesList />
    </div>
  )
}

export default ExpensesPage
