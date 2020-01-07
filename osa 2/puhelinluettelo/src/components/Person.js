import React from 'react'

const Person = ({ person, handleClick }) =>
  <div>
    {person.name}&nbsp;{person.number}&nbsp;
    <button onClick={() => handleClick(person.id)}>DELETE</button>
  </div>

export default Person