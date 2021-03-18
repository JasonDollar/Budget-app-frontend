import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-date-picker'
import { useSelector } from 'react-redux'

import { BigButton } from './styles/BigButton'

const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    >* {
      margin-bottom: 2rem;
    }
  }

  .text-input,
  .textarea {
    border: 1px solid #cacccd;
    height: 50px;
    font-size: 1.8rem;
    font-family: inherit;
    /* font-size: $font-size-large; */
    font-weight: 300;
    padding: 1rem;
  }

  .textarea {
    height: 10rem;
  }
`

const ExpenseForm = ({ titleExpense = '', descriptionExpense = '', amountExpense = '', handleSubmit, dateExpense, categoryExpense, loading }) => {
  const categories = useSelector(state => state.user.userData.categories)
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense && amountExpense / 100)
  const [expenseDate, setExpenseDate] = useState(dateExpense ? new Date(dateExpense) : new Date())
  const [category, setCategory] = useState(categoryExpense)

  const formHandler = async e => {
    e.preventDefault()
    // simple validation
    if (!title || amount <= 0) return

    await handleSubmit(title, description, amount, expenseDate, category)
  }
  return (
    <FormContainer>
      <form onSubmit={formHandler} className="form">
        <input 
          className="text-input" 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required
        />
        <input 
          className="text-input" 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          step="0.01" 
          required
        />
        <div>
          <DatePicker 
            value={expenseDate} 
            onChange={date => setExpenseDate(date)}  
            clearIcon={false}
            minDetail="year"
            required
            format="dd.MM.y"
          />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {/* below turnary is for local mobile testing purposes */}
            {categories ? categories.map(item => (
              <option key={item} value={item}>{item}</option>
            )) : (
                <option value="other">Other</option>
            )}
          </select>
        </div>
        <textarea 
          className="textarea" 
          type="text" 
          placeholder="Add a short note to you expense" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <BigButton type="submit" disabled={loading}>Save expense</BigButton>
      </form>
    </FormContainer>
  )
}

export default ExpenseForm
