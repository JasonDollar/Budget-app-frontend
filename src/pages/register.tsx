import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../store/actions/user'


const RegisterPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const formSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      return
    }
    dispatch(registerUser(name, email, password, passwordConfirm, history))
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
