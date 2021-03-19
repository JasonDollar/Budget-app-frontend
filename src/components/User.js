import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../store/actions/user'
import { useHistory } from 'react-router-dom'

import UserSettings from './UserSetings/UserSettings'

const User = ({ changeAppTheme, themeId }) => {
  const user = useSelector(state => state.user.userData)
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className="margin-r-l">
      <h1>{user.name}</h1>
      <UserSettings changeAppTheme={changeAppTheme} themeId={themeId}/>
      {/* logout below is for testing */}
      <button disabled onClick={() => dispatch(logoutUser(history))}>Logout</button>
    </div>
  )
}

export default User
