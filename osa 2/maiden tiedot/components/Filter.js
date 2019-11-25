import React from 'react'

const Filter = ({ filter, handleFilter }) => (
    <div>
        find countries&nbsp;
    <input value={filter} onChange={handleFilter} />
    </div>
)

export default Filter
