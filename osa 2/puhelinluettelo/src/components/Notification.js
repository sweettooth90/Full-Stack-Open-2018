import React from 'react'

const Notification = ({ notification, error }) => {

  let background = 'green'

  if (error) {
    background = 'red'
  }

  const notificationStyle = {
    color: 'white',
    background: background,
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