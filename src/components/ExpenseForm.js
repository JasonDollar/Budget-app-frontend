import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import axios from 'axios'

import { addExpense } from '../store/actions/expenses'

const ExpenseForm = ({ titleExpense = '', descriptionExpense = '', amountExpense = '', newExpense }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense)
  const formHandler = async e => {
    e.preventDefault()
    if (newExpense) {
      dispatch(addExpense({title, description, amount}))
      return
    }
  }
  return (
    <div className="margin-r-l">
      <form onSubmit={formHandler}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
