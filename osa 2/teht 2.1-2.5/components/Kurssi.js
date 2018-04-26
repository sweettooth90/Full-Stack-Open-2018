import React from 'react'

const Kurssit = ({kurssit}) => {
    return (
    <div>
        <IsoOtsikko />
        {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
    </div>
    )
}

const Kurssi = ({kurssi}) => (
    <div>
        <PieniOtsikko nimi={kurssi.nimi} />
        <Osat osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
    </div>
)

const Osat = ({osat}) => (
    <div>
        {osat.map(osa => <p key={osa.id}>{osa.nimi + ' ' + osa.tehtavia} </p>)}
    </div>
)

const Yhteensa = ({osat}) => (
    <div>
        yhteensä {osat.reduce((sum, osa) => sum + osa.tehtavia, 0)} tehtävää
    </div>
)

const IsoOtsikko = () => (
    <h1>Opetusohjelma</h1>
)

const PieniOtsikko = ({nimi}) => (
    <h2>{nimi}</h2>
)

export default Kurssit
