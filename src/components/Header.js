import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  max-height: 30rem;
  background: ${props => props.theme.mainThemeColor};
  margin: 0;
  padding-bottom: ${props => props.bottomAdditionalSpace / 2}px;

  h1 {
    margin: 0;
    padding: 1rem 1.5rem;
    color: #fff;
    font-weight: 300;
  }

  p {
    margin: 0;
    padding: 1rem 1.5rem;
    padding-bottom: 0rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menuIconMobile {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 3rem;
    margin: 1.5rem 2rem;

    span {
      width: 100%;
      height: 3px;
      background: #fff;

      &:not(:last-child) {
        margin-bottom: .5rem;
      }
    }
  }
`

const Header = ({ totalComponentHeight }) => {
  return (
    <Container bottomAdditionalSpace={totalComponentHeight}>
      <header className="desktopContainer header">
        <Link to="/">
          <h1>Budget</h1>
        </Link>
        <div className="menuIconMobile">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </Container>
  )
}

export default Header
