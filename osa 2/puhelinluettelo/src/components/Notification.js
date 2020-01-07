import React from 'react'

const Notification = ({ notification, error }) => {

  let color = 'green'

  if (error) {
    color = 'white',
    background = 'red'
  }

  const notificationStyle = {
    color: color,
    background: 'lightgrey',
    fontSize: 20,
    padding: 5,
  }

  if (notification === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {notification}
    </div>
  )

}

export default Notification