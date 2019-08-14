import React from 'react'

const TotalAmount = ({ parts }) => {
    return (
        <div>
            <b>total of {parts.reduce((sum, ex) => sum + ex.exercises, 0)} exercises</b>
        </div>
    )
}

export default TotalAmount
