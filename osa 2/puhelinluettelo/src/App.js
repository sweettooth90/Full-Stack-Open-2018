import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/PersonService'
import Success from './components/Success'
import Error from './components/Error'
import ListPersons from './components/ListPersons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

    const handleFilterChange = (event) => (
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
        setSuccess(`${personObject.name} was added.`)
        setTimeout(() => { setSuccess(null) }, 3500)
        personService
            .create(personObject)
            .then(newPerson => {
                persons.forEach(person => {
                    if (person.name === newName) {
                        personService.getAll(personObject)
                            .then(update => {
                                if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
                                    return (
                                        personService
                                            .update(person.id, personObject)
                                            .then(update => {
                                                personService
                                                    .remove(person.id)
                                                    .then(update => {
                                                        setPersons(persons.splice(update))
                                                        personService.getAll().then(fetch => {
                                                            setPersons(fetch)
                                                            setSuccess(`${person.name} has been updated.`)
                                                            setTimeout(() => { setSuccess(null) }, 3500)
                                                        })
                                                    })
                                            })
                                            .catch(error => {
                                                personService
                                                    .getAll()
                                                    .then(fetch => {
                                                        setError(`${person.name} was already removed.`)
                                                        setTimeout(() => { setError(null) }, 3500)
                                                    })
                                            })
                                    )
                                } else {
                                    personService
                                        .remove(person.id)
                                        .then(remove => {
                                            setPersons(persons.splice(remove))
                                            personService
                                                .getAll()
                                                .then(fetch => { setPersons(fetch) })
                                        })
                                        .catch(error => {
                                            setError(`${person.name} was already removed.`)
                                            setTimeout(() => { setError(null) }, 3500)
                                        })
                                }
                            })
                    } else {
                        setPersons(persons.concat(newPerson))
                        setNewName('')
                        setNewNumber('')
                    }
                })
            })
    }

    const removePerson = (person) => {
        if (window.confirm(`Delete ${person.name}`)) {
            return (
                personService
                    .remove(person.id)
                    .then(remove => {
                        personService
                            .getAll()
                            .then(update => {
                                setPersons(update)
                                setSuccess(`${person.name} was removed from phonebook`)
                                setTimeout(() => { setSuccess(null) }, 3500)
                            })
                    })
            )
        }
    }

    return (
        <div>
            <Success notification={success} />
            <Error incorrect={error} />
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilter={handleFilterChange} />
            <h2>add a new</h2>
            <Form
                addName={addName}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <ListPersons persons={persons} filter={filter} removePerson={removePerson} />
        </div>
    )

}

export default App
