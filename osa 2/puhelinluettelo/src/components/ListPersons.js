import React from 'react'

const ListPersons = ({ persons, filter, removePerson }) => {
    return (
        persons.filter(
            person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => {
                return <div key={person.id}>{person.name} {person.number}
                    <button onClick={() => removePerson(person)}>delete</button>
                </div>
            })
    )
}

export default ListPersons