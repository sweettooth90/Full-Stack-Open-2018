import React from 'react'

const Success = ({ notification }) => {

    if (notification === null) {
        return null
    }
    return (
        <div className="success">
            {notification}
        </div>
    )
}

export default Success
