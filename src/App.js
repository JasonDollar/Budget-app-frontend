import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Router, Route, Redirect } from 'react-router-dom'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import store from './store'
import { setExpenses } from './store/actions/expenses'
import setAuthToken from './lib/setAuthToken'
import history from './lib/history'

import Register from './pages/register'
import AddExpense from './pages/addExpense'
import Expenses from './pages/expenses'
import Expense from './pages/expense'

import { GlobalStyle } from './components/styles/globalStyles'
import { theme } from './components/styles/theme'
import Header from './components/Header'
import Total from './components/Total'

function App() {
  const [totalComponentHeight, setTotalComponentHeight] = useState(0)

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
        <Router history={history}>
          <Header totalComponentHeight={totalComponentHeight}/>
          <div className="desktopContainer">
          <Total totalComponentHeight={totalComponentHeight} setTotalComponentHeight={setTotalComponentHeight}/>
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
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
