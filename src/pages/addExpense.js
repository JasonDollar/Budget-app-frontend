import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import axios from 'axios'

import { addExpense } from '../store/actions/expenses'

const AddExpense = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const formHandler = async e => {
    e.preventDefault()
    await dispatch(addExpense({title, description, amount}))
    // const res = await axios.post('http://localhost:3080/api/v1/expenses', {title, description, amount})
    // console.log(res.data)
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
