import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const ItemDiv = styled.div`
position: relative;
    padding: 1rem;
    border: 1px solid black;
    margin-bottom: 3px;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: ${props => props.width}%;
      height: 3px;
      background: red;
      /* transition: width 3s; */
    }`

const NotificationItem = ({ message }) => {
  // const width = useRef(100)
  const [width, setWidth] = useState(100)
  useEffect(() => {
    const timer = setInterval(() => {
      // width.current = width.current - 1
      setWidth(state => state - 2)
      console.log(width)
    }, 80)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <ItemDiv width={width}>{message}</ItemDiv>
  )
}

export default NotificationItem
