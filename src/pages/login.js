import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../store/actions/user'

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formSubmitHandler = async e => {
    e.preventDefault()
    dispatch(loginUser(email, password))
    history.push('/expenses')
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
