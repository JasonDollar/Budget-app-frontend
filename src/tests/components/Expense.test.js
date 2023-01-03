import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import rootReducer from '../../store/reducers'
import Expense from '../../components/Expense'
import { userData } from '../fixtures/user'
import { expenses } from '../fixtures/expenses'
import { ui } from '../fixtures/ui'
// import { rootReducer } from '../store'

import { createMemoryHistory } from 'history'

const history = createMemoryHistory()
describe('Expense', () => {
  it('renders the correct information for the expense', async () => {
    
    // Create a mock store using the root reducer and some initial state
    const store = createStore(rootReducer, {
      expenses: {expenses},
      user: {userData},
      ui,
    })
    
    render(
      <Provider store={store} >
        <Router history={history}>
          <Expense
            expenseId="603e8a3bc4e77e04d869c708"
          />

        </Router>
      </Provider>
    )

    expect(screen.getByText(/Pizza/)).toBeInTheDocument()
    expect(screen.getByText(/40 zł/)).toBeInTheDocument()
    expect(screen.getByText(/Test description/)).toBeInTheDocument()
    expect(screen.getByText(/Food/)).toBeInTheDocument()
    expect(screen.getByText(/2 Mar/)).toBeInTheDocument()
  })
})