import React from 'react'
import { useSelector } from 'react-redux'

import UserSettings from './UserSettings'

const User = ({ changeAppTheme, themeId }) => {
  const user = useSelector(state => state.user.userData)
  return (
    <div className="margin-r-l">
      <h1>{user.name}</h1>
      <UserSettings changeAppTheme={changeAppTheme} themeId={themeId}/>
    </div>
  )
}

export default User
