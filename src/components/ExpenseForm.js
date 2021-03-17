import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-date-picker'

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

const SaveButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  background: ${props => props.theme.mainThemeColor};
  color: ${props => props.theme.textColorInverted};
  padding: 1rem 0;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
`


const ExpenseForm = ({ titleExpense = '', descriptionExpense = '', amountExpense = '', handleSubmit, dateExpense }) => {
  const [title, setTitle] = useState(titleExpense)
  const [description, setDescription] = useState(descriptionExpense)
  const [amount, setAmount] = useState(amountExpense && amountExpense / 100)
  const [expenseDate, setExpenseDate] = useState(dateExpense ? new Date(dateExpense) : new Date())

  const formHandler = async e => {
    e.preventDefault()
    // simple validation
    if (!title || amount <= 0) return

    await handleSubmit(title, description, amount, expenseDate)
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
        <DatePicker 
          value={expenseDate} 
          onChange={date => setExpenseDate(date)}  
          clearIcon={false}
          minDetail="year"
          required
          format="dd.MM.y"
        />
        <textarea 
          className="textarea" 
          type="text" 
          placeholder="Add a short note to you expense" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <SaveButton type="submit">Save expense</SaveButton>
      </form>
    </FormContainer>
  )
}

export default ExpenseForm
