import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  /* height: 30vh; */
  max-height: 30rem;
  background: ${props => props.theme.indigo};
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
  }
`

const Header = ({ totalComponentHeight }) => {
  return (
    <Container bottomAdditionalSpace={totalComponentHeight}>
      <header className="desktopContainer header">
        <Link to="/">
          <h1>Budget</h1>
        </Link>
        <p>Menu</p>
      </header>
    </Container>
  )
}

export default Header
