import React from 'react'
import { useParams } from 'react-router-dom'
import Expense from '../components/Expense'

const ExpensePage = () => {
  const { expenseId } = useParams()
  return (
    <div>
      <Expense expenseId={expenseId}/>
    </div>
  )
}

export default ExpensePage
