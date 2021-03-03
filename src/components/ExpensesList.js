import React from 'react'
import ExpenseListItem from './ExpenseListItem'

const ExpensesList = ({ expenses, loading }) => {
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div>
      <ul>
        {expenses?.map(item => (
          <ExpenseListItem key={item._id} expense={item}/>
        ))}
      </ul>
    </div>
  )
}

export default ExpensesList
