import React from 'react'

const Part = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <p key={part.id}>{part.name} &nbsp; {part.exercises}</p>)}
        </div>
    )
}

export default Part
