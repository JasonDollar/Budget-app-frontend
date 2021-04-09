import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectSingleExpense } from '../store/selectors/expenses'
import { editExpense } from '../store/actions/expenses'
import { selectSingleApiCall } from '../store/selectors/ui'

import ExpenseForm from '../components/ExpenseForm'
import Loading from '../components/styles/Loading'
import { apiCallsNames as api } from '../config/config'

const EditExpense = () => {
  const { expenseId } = useParams()
  const history = useHistory()
  const expense = useSelector(state => selectSingleExpense(expenseId)(state))
  const saveEditExpenseApiState = useSelector(state => selectSingleApiCall(api.saveEditExpense)(state))
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
    dispatch(editExpense(expenseId, updates, api.saveEditExpense, history, 'Expense saved')) 
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
        apiCallState={saveEditExpenseApiState}
      />
    </div>
  )
}

export default EditExpense
