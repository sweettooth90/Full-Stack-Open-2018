import React from 'react'

const Country = ({ country }) => {

    const languages = country.languages.map(language =>
        <div key={language.iso639_2}>{language.name}</div>
    )

    return (
        <div>
            <h1>{country.name}</h1>
            <div>
                capital: <b>{country.capital}</b>
            </div>
            <div>
                population: <b>{country.population}</b>
            </div>
            <h2>languages</h2>
            <div>
                {languages}
            </div>
            <img alt="Flag" src={country.flag} width="300px" />
        </div>
    )
}

export default Country
