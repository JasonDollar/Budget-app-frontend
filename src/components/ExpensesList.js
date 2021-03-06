import React from 'react'
import styled from 'styled-components'
import ExpenseListItem from './ExpenseListItem'

const List = styled.ul`
  list-style: none;
  margin: 0 1.5rem;
  padding: 0;
`


const ExpensesList = ({ expenses, loading }) => {
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div>
      <List>
        {expenses?.map(item => (
          <ExpenseListItem key={item._id} expense={item}/>
        ))}
      </List>
    </div>
  )
}

export default ExpensesList
