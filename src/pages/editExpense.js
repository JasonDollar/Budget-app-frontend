import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ExpenseForm from '../components/ExpenseForm'

import { editExpense } from '../store/actions/expenses'

const EditExpense = () => {
  const { expenseId } = useParams()
  const expense = useSelector(state => state.expenses.expenses.find(item => item._id === expenseId))
  const loading = useSelector(state => state.expenses.loading)
  const dispatch = useDispatch()

  const editExpenseHandler = async (title, description, amount) => {
    const updates = {}
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
    // save expense as whole number
    dispatch(editExpense(expenseId, updates)) 
}
  console.log(expense)
  if (loading || !expense) {
    return <div>Loading</div>
  }
  return (
    <div className="margin-r-l">
      <h2>Edit expense</h2>
      <ExpenseForm titleExpense={expense.title} descriptionExpense={expense.description} amountExpense={expense.amount} handleSubmit={editExpenseHandler}/>
    </div>
  )
}

export default EditExpense
