import styled from 'styled-components'

const TotalBox = styled.div`
  margin: 0 1.5rem;
  margin-top: -${props => props?.boxSize / 2}px;
  margin-bottom: 3rem;
  background: #fff;
  box-shadow: 0px 2px 20px -10px #999;
  border-radius: 10px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  line-height: 1;

  .header {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total {
    font-size: 4.5rem;
    color: ${props => props.theme.mainThemeColor};
  }

  .link {
    cursor: pointer;
    background: ${props => props.theme.mainThemeColor};
    padding: 3rem;
    border-radius: 50%; 
    position: relative;
    & span {
      color: #fff;
      font-size: 4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .today {
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export default TotalBox