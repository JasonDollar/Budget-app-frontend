import React, { useState } from 'react'
import styled from 'styled-components'

import { getThemeData } from './styles/theme'

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

const ThemeColor = styled.div`
flex: 1;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .themeName {
    margin-top: .5rem;
    color: ${props => props.chosenColor ? props.theme.textColor : props.theme.textGreyColor}
  }
  .colorCircle {
    .outer {
    background: #fff;
    border: 1px solid ${props => props.chosenColor ? props.backColor : '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  .inner {
    padding: 1rem;
    display: block;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: ${props => props.backColor};
  }
  }
`

const UserSettings = ({ changeAppTheme, themeId }) => {
  const [themes] = useState(() => getThemeData())

  return (
    <SettingContainer>
      <div className="appTheme">
        <p>Choose app theme:</p>
        <div className="themes">
          {themes?.map(item => {
            return (
              <ThemeColor key={item.id} className="theme" onClick={() => changeAppTheme(item.id)} backColor={item.mainColor} chosenColor={themeId === item.id}>
                <div className="colorCircle" >
                  <div className="outer">
                    <div className="inner" />
                  </div>
                </div>
                <span className="themeName">{item.name}</span>
              </ThemeColor>
            )
          })}
        </div>

      </div>
    </SettingContainer>
  )
}

export default UserSettings
