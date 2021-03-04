import React, { useState, useEffect } from 'react'
import { calculateTotal } from '../lib/calcTotal'

const Total = ({ expenses }) => {
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    const totalAmountCalc = calculateTotal(expenses)
    setTotalAmount(totalAmountCalc)
  }, [expenses])
  
  return (
    <div>
      {totalAmount}
    </div>
  )
}

export default Total
