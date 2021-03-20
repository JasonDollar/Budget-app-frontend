import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import store from './store'
import { setExpenses } from './store/actions/expenses'
import { getUserData } from './store/actions/user'
import setAuthToken from './lib/setAuthToken'
import history from './lib/history'

import Register from './pages/register'
import Login from './pages/login'
import AddExpense from './pages/addExpense'
import EditExpense from './pages/editExpense'
import Expenses from './pages/expenses'
import Expense from './pages/expense'
import User from './pages/user'

import { GlobalStyle } from './components/styles/globalStyles'
import { getTheme } from './components/styles/theme'
import Header from './components/Header'
import Total from './components/Total'

function App() {
  const [totalComponentHeight, setTotalComponentHeight] = useState(0)
  // const [userLogged, setUserLogged] = useState()
  const [themeId, changeThemeId] = useState(() => {
    const themeIdFromLS = localStorage.getItem('theme')
    if (themeIdFromLS) return themeIdFromLS
    return 'violet'
  })
  
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
      store.dispatch(getUserData())
    }
  }

  const changeAppTheme = (themeId) => {
    localStorage.setItem('theme', themeId)
    changeThemeId(themeId)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={() => getTheme(themeId)} >
        <GlobalStyle />
        <Router history={history}>
          <Header totalComponentHeight={totalComponentHeight}/>
          <div className="desktopContainer">
          <Switch>
          
            <Route path="/register" exact>
              <Register />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/">
              <Total totalComponentHeight={totalComponentHeight} setTotalComponentHeight={setTotalComponentHeight}/>
              {/* redirect to expenses page immediately */}
              <Switch>
                <Route path="/" exact>
                  <Redirect to="expenses" />
                </Route>
                <Route path="/user" >
                  <User changeAppTheme={changeAppTheme} themeId={themeId}/>
                </Route>
                <Route path="/addExpense" exact>
                  <AddExpense/>
                </Route>
                <Route path="/expenses/:expenseId" exact>
                  <Expense />
                </Route>
                <Route path="/expenses/edit/:expenseId" exact>
                  <EditExpense />
                </Route>
                <Route path="/expenses" exact>
                  <Expenses />
                </Route>
              </Switch>
            </Route>
          </Switch>
          </div> 
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

