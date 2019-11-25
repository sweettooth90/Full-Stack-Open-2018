import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import './index.css'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => (
    setFilter(event.target.value)
  )

  return (
    <>
      <Filter filter={filter} handleFilter={handleFilter} />
      <Countries filter={filter} countries={countries} />
    </>
  );
}

export default App
