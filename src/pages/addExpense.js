import React, { useState } from 'react'
import axios from 'axios'

const AddExpense = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const formHandler = async e => {
    e.preventDefault()
    const res = await axios.post('http://localhost:3080/api/v1/expenses', {title, description, amount})
    console.log(res.data)
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddExpense
