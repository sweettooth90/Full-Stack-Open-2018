import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/PersonService'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

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

        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.map(person => person.name.toLowerCase()).indexOf(newName.toLowerCase()) !== -1) {

            if (window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one?`)
            ) {
                const editPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

                const updatedPerson = { ...editPerson, number: newNumber }

                personService
                    .update(updatedPerson.id, updatedPerson)
                    .then(newPerson => {
                        setPersons(persons.map(person => person.id !== editPerson.id ? person : newPerson))
                        setNewName('')
                        setNewNumber('')
                        alert(`Updated ${newName}`)
                    })
                    .catch(error => {
                        setPersons(persons.filter(persons => persons.id !== editPerson.id))
                        alert(`${newName} has been removed.`)
                    })
            }
        } else {
            personService
                .create(personObject)
                .then(newPerson => {
                    setPersons(persons.concat(newPerson))
                    setNewName('')
                    setNewNumber('')
                    alert(`Added ${newName}`)
                })

        }
    }

    const removeName = id => {
        const removePerson = persons.find(person => person.id === id)
        if (window.confirm(`Do you want to delete ${removePerson.name}?`)) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
                .catch(error => {
                    setPersons(persons.filter(person => person.id !== id))
                    alert(`${removePerson.name} has already been removed.`)
                })
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
            <Persons persons={persons} filter={filter} handleClick={removeName} />
        </div>
    )

}

export default App
