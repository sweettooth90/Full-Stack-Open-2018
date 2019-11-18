import React from 'react'

const Persons = ({ persons, filter }) => {
    const filterNames = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    const namesToShow = () => filterNames.map(person => <p key={person.name}>{person.name} {person.number}</p>)
    return (
        <div>
            {namesToShow()}
        </div>
    )
}

export default Persons
