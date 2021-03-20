import styled from 'styled-components'

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  @media(min-width: 576px) {
    justify-content: center;
  }
  & > * {
    width: ${props => props.buttons ? (100 - 5) / props.buttons : 100}%;
    @media(min-width: 576px) {
      width: ${props => props.buttons > 5 ? (100 - 5) / props.buttons : 20}%;
      margin: 0 2rem;
    }
  }

`

const BigButton = styled.button`
  cursor: pointer;
  font-size: ${props => props.fontSize ? props.fontSize * 2 : 2}rem;
  background: ${props => {
    if (props.danger) return props.theme.colorDanger
    if (props.alert) return props.theme.colorAlert
    return props.theme.mainThemeColor
  }};
  color: ${props => props.theme.textColorInverted};

  border: ${props => props.disabled ? '10px solid blue' : 'none'};
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  /* min-width: 10rem; */
  width: ${props => props.wide ? 100 : 'auto'}%;
  & a {
    display: block;
    padding: 1rem 2rem;
  }
`

export { BigButton, ButtonsContainer }