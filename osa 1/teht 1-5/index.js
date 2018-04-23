import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
        {
        nimi: 'Reactin perusteet',
        tehtavia: 10
        },
        {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
        },
        {
        nimi: 'Komponenttien tila',
        tehtavia: 14
        }
    ]
}
  return (
    <div>
      <Otsikko kurssi = {kurssi.nimi} />
      <Sisalto osat = {kurssi.osat} />
      <Yhteensa osat = {kurssi.osat}/>
    </div>
  )
}

const Otsikko = ({kurssi}) => (
        <div>
            <h1>{kurssi}</h1>
        </div>
)

const Sisalto = ({osat}) => (
    osat.map(osa => (<Osa osa={osa} />))
)

const Osa = ({osa}) => (
        <div>
            <p>{osa.nimi} {osa.tehtavia}</p>
        </div>
)

const Yhteensa = ({osat}) => (
        <div>
            <p>yhteensä {osat.map(osa => osa.tehtavia).reduce((x,y) => x + y)} tehtävää</p>
        </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
