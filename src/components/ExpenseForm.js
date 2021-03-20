import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-date-picker'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectUserCategories } from '../store/selectors/user'

import { BigButton, ButtonsContainer } from './styles/BigButton'

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
    font-weight: 300;
    padding: 1rem;
  }

  .textarea {
    height: 10rem;
  }
`

const ExpenseForm = ({ expenseId, titleExpense = '', descriptionExpense = '', amountExpense = '', handleSubmit, dateExpense, categoryExpense , apiCallState }) => {
  
  const categories = useSelector(selectUserCategories)
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense && amountExpense / 100)
  const [expenseDate, setExpenseDate] = useState(dateExpense ? new Date(dateExpense) : new Date())
  const [category, setCategory] = useState()
  
  useEffect(() => {
    if (categoryExpense) {
      setCategory(categoryExpense)
    } else if (categories.length) {
      setCategory(categories[0])
    } else {
      setCategory('other')
    }
  }, [categories, categoryExpense])

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
            {categories?.length ? categories.map(item => (
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
        <ButtonsContainer buttons={2}>
          <BigButton alert>
            <Link to={expenseId ? `/expenses/${expenseId}` : '/expenses'}>
              Cancel
            </Link>
          </BigButton>
          <BigButton type="submit" disabled={apiCallState?.loading}>Save expense</BigButton>
        </ButtonsContainer>
              {apiCallState?.loading && <p>Saving</p>}
        {apiCallState?.error?.message}
      </form>
    </FormContainer>
  )
}

export default ExpenseForm
