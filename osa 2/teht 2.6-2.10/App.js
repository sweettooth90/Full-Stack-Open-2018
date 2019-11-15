import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleFilter = (event) => (
        setFilter(event.target.value)
    )

    const handleNameChange = (event) => (
        setNewName(event.target.value)
    )

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilter={handleFilter} />
            <h2>add a new</h2>
            <Form
                addName={addName}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )

}

export default App
