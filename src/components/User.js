import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const user = useSelector(state => state.user.userData)
  console.log(user)
  return (
    <div className="margin-r-l">
      <h1>{user.name}</h1>
    </div>
  )
}

export default User
