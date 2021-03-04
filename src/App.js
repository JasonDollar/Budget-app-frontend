import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import store from './store'
import { setExpenses } from './store/actions/expenses'
import setAuthToken from './utils/setAuthToken'

import Register from './pages/register'
import AddExpense from './pages/addExpense'
import Expenses from './pages/expenses'
import Expense from './pages/expense'

import { GlobalStyle } from './components/styles/globalStyles'
import { theme } from './components/styles/theme'

function App() {
  useEffect(() => {
    getJwtFromLS()
  }, [])

  
const getJwtFromLS = () => {
  const token = localStorage.getItem('jwtToken')
  if (token) {
    const decoded = jwt_decode(token)
    console.log(decoded)
    setAuthToken(token)
    store.dispatch(setExpenses())
  }
}

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Router>
          {/* redirect to expenses page immediately */}
          <Route path="/" exact>
            <Redirect to="expenses" />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/addExpense" exact>
            <AddExpense/>
          </Route>
          <Route path="/expenses/:expenseId">
            <Expense />
          </Route>
          <Route path="/expenses" exact>
            <Expenses />
          </Route>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
