import React from 'react'
import Person from './Person'

const Content = ({ people, search, handleClick }) => {
  const filtered = people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  const rows = () => filtered.map(person => <Person key={person.name} person={person} handleClick={handleClick} />)
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Content