import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calculateTotal, calculateTodayExpenses } from '../lib/calcMoney'
import formatMoney from '../lib/formatMoney'

import { selectUserSettings } from '../store/selectors/user'
import { selectAllExpenses } from '../store/selectors/expenses'

import TotalBox from './styles/TotalBox'

const Total = ({ totalComponentHeight, setTotalComponentHeight }) => {
  const [totalAmount, setTotalAmount] = useState('')
  const [todayAmount, setTodayAmount] = useState('')
  const expenses = useSelector(selectAllExpenses)
  const { currency, locale } = useSelector(selectUserSettings)
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
          {formatMoney(totalAmount, currency, locale)}
        </div>
        <Link to='/addExpense' className="link">
          <span>+</span>
        </Link>
      </div>
      <p className="today">
        {formatMoney(todayAmount, currency, locale)} today
      </p>
    </TotalBox>
  )
}

export default Total
