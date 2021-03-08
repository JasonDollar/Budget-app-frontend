import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addExpense } from '../store/actions/expenses'

const ExpenseForm = ({ titleExpense = '', descriptionExpense = '', amountExpense = '', newExpense }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense)
  const formHandler = async e => {
    e.preventDefault()
    // simple validation
    if (!title || amount <= 0) return
    if (newExpense) {
      // save expense as whole number
      const validAmount = Math.ceil(amount * 100)
      dispatch(addExpense({title, description, amount: validAmount})) 
      return
    }
  }
  return (
    <div className="margin-r-l">
      <form onSubmit={formHandler}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm
