import React, { useState, useEffect } from 'react'
import personService from './services/PersonService'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Content from './components/Content'
import Form from './components/Form'

const App = () => {

  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(currentContacts => {
        setPersons(currentContacts)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const showNotification = (notification, isError) => {
    setError(isError)
    setNotification(notification)
    setTimeout(() => {
        setNotification(null)
        setError(false)
    }, 3500)
  }

  const addPerson = (event) => {

    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const personNames = persons.map(persons =>
      persons.name.trim().toLowerCase()
    )

    if (personNames.indexOf(newName.trim().toLowerCase()) !== -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace?`)
      ){
        const personToEdit = persons.find(person =>
          person.name.trim().toLowerCase() === newName.trim().toLowerCase()
        )
        const changedPerson = { ...personToEdit, number: newNumber }
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== personToEdit.id ? person : returnedPerson)
            )
            setNewName('')
            setNewNumber('')
            showNotification(`${newName} updated.`, false)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== personToEdit.id))
            showNotification(`${newName} has been removed.`, true)
          })
      }
    } else {
        personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          showNotification(`${newName} added.`, false)
        })
    }
  }

  const removePerson = id => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Do you want to delete ${personToRemove.name}?`)) {
        personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          showNotification(`Removed ${personToRemove.name}`, false)
        })
        .catch(error => {
          setPersons(persons.filter(person => person.id !== id))
          showNotification(`${personToRemove.name} has already been removed.`, true)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>      
      <Notification notification={notification} error={error} />
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Content
        people={persons}
        search={search}
        handleClick={removePerson} />
    </div>

  )

}

export default App