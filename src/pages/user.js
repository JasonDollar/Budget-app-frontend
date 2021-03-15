import React from 'react'

import User from '../components/User'

const user = ({ changeAppTheme, themeId }) => {
  return (
    <div>
      <User  changeAppTheme={changeAppTheme} themeId={themeId}/>
    </div>
  )
}

export default user
