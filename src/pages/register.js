import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../store/actions/user'

// Below compoenent is created to test registration and for easily setting jwt
// import setAuthToken from '../lib/setAuthToken'
const RegisterPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const formSubmitHandler = async e => {
    e.preventDefault()
    dispatch(registerUser(name, email, password, passwordConfirm, history))
    
    // const res = await axios.post('http://localhost:3080/api/v1/users', {name, email, password, passwordConfirm})
    // const token = res.data.userData.token
    // localStorage.setItem('jwtToken', token)
    // setAuthToken(token)
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default RegisterPage
