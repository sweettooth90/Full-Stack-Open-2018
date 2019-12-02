import React from 'react'

const Error = ({ incorrect }) => {

    if (incorrect === null) {
        return null
    }
    return (
        <div className="error">
            {incorrect}
        </div>
    )
}

export default Error
