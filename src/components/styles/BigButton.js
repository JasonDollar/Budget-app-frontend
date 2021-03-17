import styled from 'styled-components'

const BigButton = styled.button`
  cursor: pointer;
  font-size: ${props => props.fontSize ? props.fontSize * 2 : 2}rem;
  background: ${props => {
    if (props.danger) return props.theme.colorDanger
    if (props.alert) return props.theme.colorAlert
    return props.theme.mainThemeColor
  }};
  color: ${props => props.theme.textColorInverted};
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  min-width: 10rem;
  
`

export default BigButton