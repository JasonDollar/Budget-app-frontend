import React from 'react'
import styled from 'styled-components'
import NotificationItem from './NotificationItem'

const Noti = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
`

const Notifications = ({ notifications }) => {
  return (
    <Noti>
      {notifications.map(item => (
        <NotificationItem key={item.id} notificationId={item.id} message={item.message}/>
      ))}
    </Noti>
  )
}

export default Notifications
