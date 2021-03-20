import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getThemeData } from '../styles/theme'
import CategoriesSettings from './CategoriesSettings'
import CurrencySettings from './CurrencySettings'
import ThemeSettings from './ThemeSettings'

import { selectUserSettings, selectUserCategories } from '../../store/selectors/user'

const SettingContainer = styled.div`
  .appTheme {
    @media (min-width: 768px) {
      width: 50%;
    }
  }

  .themes {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
  }
`


const UserSettings = ({ changeAppTheme, themeId }) => {
  const [themes] = useState(() => getThemeData())
  const settings = useSelector(selectUserSettings)
  const categories = useSelector(selectUserCategories)

  return (
    <SettingContainer>
      <div className="appTheme">
        <p>Choose app theme:</p>
        <div className="themes">
          <ThemeSettings themes={themes} themeId={themeId} changeAppTheme={changeAppTheme}/>
        </div>
        <div>
          <CurrencySettings userCurrency={settings?.currency}/>
        </div>
        <div>
          <CategoriesSettings categories={categories}/>
        </div>
      </div>
    </SettingContainer>
  )
}

export default UserSettings
