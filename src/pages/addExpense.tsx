import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import ExpenseForm from '../components/ExpenseForm'

import { useDispatch, useSelector } from 'react-redux'

import { addExpense } from '../store/actions/expenses'
import { selectSingleApiCall } from '../store/selectors/ui'
import { apiCallsNames as api } from '../config/config'

const Header = styled.h2``

const AddExpensePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const saveNewExpenseApiState = useSelector(state => selectSingleApiCall(api.saveNewExpense)(state))
  const addExpenseHandler = async (title: string, description: string, amount: number, date: Date, category: string) => {
    // save expense as whole number
    const validAmount = Math.ceil(amount * 100)
    dispatch(addExpense({title, description, amount: validAmount, expenseDate: date, category}, api.saveNewExpense, history, 'Expense added')) 
  }
  
  return (
    <div className="margin-r-l">
      <Header>Add Expense</Header>
      <ExpenseForm handleSubmit={addExpenseHandler} apiCallState={saveNewExpenseApiState}/>
    </div>
  )
}

export default AddExpensePage
