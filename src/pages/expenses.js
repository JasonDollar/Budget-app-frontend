import React from 'react'
import { useSelector } from 'react-redux'
import ExpensesList from '../components/ExpensesList'
import Total from '../components/Total'
import Header from '../components/Header'

// import { setExpensesToStore } from '../store/actions/expenses'

const ExpensesPage = () => {
  const expenses = useSelector(state => state.expenses.expenses)
  const expensesLoading = useSelector(state => state.expenses.loading)
  // console.log(expenses)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setExpensesToStore())

  // }, [])
  return (
    <div>
      <Header />
      <Total expenses={expenses} />
      <ExpensesList expenses={expenses} loading={expensesLoading}/>
    </div>
  )
}

export default ExpensesPage
