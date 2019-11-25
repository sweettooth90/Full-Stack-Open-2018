import React, { useState } from 'react'
import Country from './Country'

const Countries = ({ filter, countries }) => {

    const [country, setCountry] = useState()
    const [show, setShow] = useState(false)

    const handleClick = (country) => () => {
        setShow(true)
        setCountry(country)
    }

    const countriesToShow = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    )

    const listCountries = () => (
        countriesToShow.map(country =>
            <div key={country.name}>
                {country.name} &nbsp;
                <button className="button" onClick={handleClick(country)}>show</button>
            </div>
        )
    )

    if (countriesToShow.length === 1) {
        return (
            <Country country={countriesToShow[0]} />
        )
    }
    else if (countriesToShow.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else {
        if (!show) {
            return (
                listCountries()
            )
        }
        else {
            return (
                <div>
                    {listCountries()}
                    <Country country={country} />
                </div>
            )
        }
    }
}

export default Countries
