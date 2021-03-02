import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExpensesList from '../components/ExpensesList'

// import { setExpensesToStore } from '../store/actions/expenses'

const ExpensesPage = () => {
  const expenses = useSelector(state => state.expenses)
  console.log(expenses)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setExpensesToStore())

  // }, [])
  return (
    <div>
      <ExpensesList expenses={expenses}/>
    </div>
  )
}

export default ExpensesPage
