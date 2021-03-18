import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ExpenseForm from '../components/ExpenseForm'
import Loading from '../components/styles/Loading'

import { editExpense } from '../store/actions/expenses'

const EditExpense = () => {
  const { expenseId } = useParams()
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const loading = useSelector(state => state.expenses.loading)
  const dispatch = useDispatch()
  
  const editExpenseHandler = async (title, description, amount, date, category) => {
    const updates = {}
    updates.expenseDate = date
    if (title !== expense.title) {
      updates.title = title
    }
    if (description !== expense.description) {
      updates.description = description
    }
    if (amount !== expense.amount) {
      const validAmount = Math.ceil(amount * 100)
      updates.amount = validAmount
    }
    if (category !== expense.category) {
      updates.category = category
    }
    // save expense as whole number
    dispatch(editExpense(expenseId, updates)) 
  }

  if (!expense) {
    return <Loading />
  }
  return (
    <div className="margin-r-l">
      <h2>Edit expense</h2>
      <ExpenseForm 
        expenseId={expenseId}
        titleExpense={expense.title} 
        descriptionExpense={expense.description} 
        amountExpense={expense.amount} 
        dateExpense={expense.expenseDate}
        categoryExpense={expense.category}
        handleSubmit={editExpenseHandler}
        loading={loading}
      />
    </div>
  )
}

export default EditExpense
