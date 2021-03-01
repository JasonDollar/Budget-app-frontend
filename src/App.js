import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"


import store from './store'
import setAuthToken from './utils/setAuthToken'

import Register from './pages/register'
import AddExpense from './pages/addExpense'
import Expenses from './pages/expenses'


const getJwtFromLS = () => {
  if (localStorage.jwtToken) {
    const token = localStorage.getItem('jwtToken')
    const decoded = jwt_decode(token)
    console.log(decoded)
    // if (decoded.exp * 1000 < Date.now()) {
    //   localStorage.removeItem('jwtToken')
    //   setAuthToken(false)
    //   window.location.href= '/register'
    // } else {
      // console.log(decoded.exp, Date.now())
      setAuthToken(token)
    // }
  }
}

function App() {
  useEffect(() => {
    getJwtFromLS()
  }, [])

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
