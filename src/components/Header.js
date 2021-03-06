import React from 'react'

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
`

const Header = ({ totalComponentHeight }) => {
  return (
    <Container bottomAdditionalSpace={totalComponentHeight}>
      <p>Menu</p>
      <h1>Budget</h1>
    </Container>
  )
}

export default Header
