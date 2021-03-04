import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { calculateTotal } from '../lib/calcTotal'

const TotalBox = styled.div`
  margin: 1rem;
  /* border: 1px solid black; */
  box-shadow: 0px 2px 10px -5px #444;
  border-radius: 10px;
  padding: 3rem 1rem;
`

const Total = ({ expenses }) => {
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    const totalAmountCalc = calculateTotal(expenses)
    setTotalAmount(totalAmountCalc)
  }, [expenses])
  
  return (
    <TotalBox>
      {totalAmount}
    </TotalBox>
  )
}

export default Total
