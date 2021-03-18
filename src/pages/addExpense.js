import React from 'react'
import styled from 'styled-components'
import ExpenseForm from '../components/ExpenseForm'

import { useDispatch } from 'react-redux'

import { addExpense } from '../store/actions/expenses'

const Header = styled.h2``

const AddExpensePage = () => {
  const dispatch = useDispatch()
  const addExpenseHandler = async (title, description, amount, date, category) => {
    // save expense as whole number
    const validAmount = Math.ceil(amount * 100)
    dispatch(addExpense({title, description, amount: validAmount, expenseDate: date, category})) 
  }
  
  return (
    <div className="margin-r-l">
      <Header>Add Expense</Header>
      <ExpenseForm handleSubmit={addExpenseHandler}/>
    </div>
  )
}

export default AddExpensePage
