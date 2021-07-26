import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../store/actions/user'
import { useHistory } from 'react-router-dom'

import { selectUserData } from '../store/selectors/user'

import UserSettings from './UserSetings/UserSettings'
import { RootState } from '../store'
import { IUserData } from '../interfaces/user'

interface Props {
  changeAppTheme: (themeId: string) => void
  themeId: string
}

const User: React.FC<Props> = ({ changeAppTheme, themeId }) => {
  const user = useSelector<RootState, IUserData>(selectUserData)
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
