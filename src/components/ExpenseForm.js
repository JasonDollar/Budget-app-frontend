import React, { useState } from 'react'


const ExpenseForm = ({ titleExpense = '', descriptionExpense = '', amountExpense = '', handleSubmit }) => {
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense)
  const formHandler = async e => {
    e.preventDefault()
    // simple validation
    if (!title || amount <= 0) return

    await handleSubmit(title, description, amount)
  }
  return (
    <div>
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
