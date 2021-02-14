import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import setAuthToken from './utils/setAuthToken'

import Register from './pages/register'
import AddExpense from './pages/addExpense'

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
    <Router>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/addExpense" exact>
        <AddExpense/>
      </Route>
    </Router>
  );
}

export default App;
