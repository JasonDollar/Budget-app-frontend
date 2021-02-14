import React, {useState} from 'react'
import axios from 'axios'

// Below compoenent is created to test registration and for easily setting jwt
import setAuthToken from '../utils/setAuthToken'
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const formSubmitHnadler = async e => {
    e.preventDefault()
    const res = await axios.post('http://localhost:3080/api/v1/users', {name, email, password, passwordConfirm})
    localStorage.setItem('jwtToken', res.data.data.token)
    console.log(res.data.data.token)
    setAuthToken(res.data.data.token)
  }

  return (
    <div>
      <form onSubmit={formSubmitHnadler}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Register
