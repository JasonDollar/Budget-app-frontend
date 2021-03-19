import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { calculateTotal, calculateTodayExpenses } from '../lib/calcMoney'
import formatMoney from '../lib/formatMoney'

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

const Total = ({ totalComponentHeight, setTotalComponentHeight }) => {
  const [totalAmount, setTotalAmount] = useState('')
  const [todayAmount, setTodayAmount] = useState('')
  const expenses = useSelector(state => state.expenses.expenses)
  const currency = useSelector(state => state.user.userData.settings.currency)
  const boxRef = useRef()

  useEffect(() => {
    const totalAmountCalc = calculateTotal(expenses)
    const todayExpense = calculateTodayExpenses(expenses)
    setTotalAmount(totalAmountCalc)
    setTodayAmount(todayExpense)
  }, [expenses])
  
  useEffect(() => {
    setTotalComponentHeight(boxRef.current?.clientHeight)
  }, [])
  
  return (
    <TotalBox ref={boxRef} boxSize={totalComponentHeight}>
      <p className="header">Total</p>
      <div className="main">
        <div className="total">
          {formatMoney(totalAmount, 'USD')}
        </div>
        <Link to='/addExpense' className="link">
          <span>+</span>
        </Link>
      </div>
      <p className="today">
        {formatMoney(todayAmount, currency)} today
      </p>
    </TotalBox>
  )
}

export default Total
