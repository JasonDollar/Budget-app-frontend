import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"


import store from './store'
import { setExpensesToStore } from './store/actions/expenses'
import setAuthToken from './utils/setAuthToken'

import Register from './pages/register'
import AddExpense from './pages/addExpense'
import Expenses from './pages/expenses'


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
    store.dispatch(setExpensesToStore())
  }
}

  return (
    <Provider store={store}>
      <Router>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/addExpense" exact>
          <AddExpense/>
        </Route>
        <Route path="/" exact>
          <Expenses />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
