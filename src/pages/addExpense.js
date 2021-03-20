import React from 'react'
import styled from 'styled-components'
import ExpenseForm from '../components/ExpenseForm'

import { useDispatch, useSelector } from 'react-redux'

import { addExpense } from '../store/actions/expenses'

const Header = styled.h2``

const AddExpensePage = () => {
  const dispatch = useDispatch()
  const saveNewExpenseApiState = useSelector(state => state.ui.apiCalls.find(item => item.name === 'save-new-expense'))
  const addExpenseHandler = async (title, description, amount, date, category) => {
    // save expense as whole number
    const validAmount = Math.ceil(amount * 100)
    dispatch(addExpense({title, description, amount: validAmount, expenseDate: date, category}, 'save-new-expense')) 
  }
  
  return (
    <div className="margin-r-l">
      <Header>Add Expense</Header>
      <ExpenseForm handleSubmit={addExpenseHandler} apiCallState={saveNewExpenseApiState}/>
    </div>
  )
}

export default AddExpensePage
