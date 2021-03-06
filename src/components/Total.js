import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { calculateTotal } from '../lib/calcTotal'

const TotalBox = styled.div`
  margin: 1.5rem;
  margin-top: -${props => props?.boxSize / 2}px;
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
    color: ${props => props.theme.indigo};
  }

  .link {
    cursor: pointer;
    background: ${props => props.theme.indigo};
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

const Total = ({ expenses }) => {
  const [totalAmount, setTotalAmount] = useState(0)
  const boxRef = useRef()
  useEffect(() => {
    const totalAmountCalc = calculateTotal(expenses)
    setTotalAmount(totalAmountCalc)
    // console.log(boxRef.current.clientHeight)
  }, [expenses])
  
  return (
    <TotalBox ref={boxRef} boxSize={boxRef.current?.clientHeight}>
      <p className="header">Total</p>
      <div className="main">
        <div className="total">
          ${totalAmount}
        </div>
        <Link to='/addExpense' className="link">
          <span>+</span>
        </Link>
      </div>
      <p className="today">
        $123 today
      </p>
    </TotalBox>
  )
}

export default Total
