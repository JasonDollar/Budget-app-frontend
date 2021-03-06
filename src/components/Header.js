import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  height: 30vh;
  background: ${props => props.theme.indigo};
  margin: 0;

  h1 {
    color: #fff;
    margin: 0;
  }
`

const Header = () => {
  return (
    <Container>
      <h1>Budget</h1>
    </Container>
  )
}

export default Header
