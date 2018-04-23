import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    handleAction = (arvio) => () => {
        if (arvio === 'hyva'){
            this.setState({hyva: this.state.hyva + 1})
        } else if (arvio === 'neutraali'){
            this.setState({neutraali: this.state.neutraali + 1})
        } else if (arvio === 'huono'){
            this.setState({huono: this.state.huono + 1})
        }

}
    render() {
        return(
            <div>
            <div>
                <h1>anna palautetta</h1>
            </div>

            <div>
                <Button handleClick={this.handleAction('hyva')} teksti='hyvä' />
                <Button handleClick={this.handleAction('neutraali')} teksti='neutraali' />
                <Button handleClick={this.handleAction('huono')} teksti='huono' />
            </div>

            <div>
                <h1>statistiikka</h1>
                <Statistics hyva={this.state.hyva}
                neutraali={this.state.neutraali}
                huono={this.state.huono} />
            </div>
            </div>
        )
    }
}

const Button = ({teksti, handleClick}) => {
    return (
        <button onClick={handleClick}>
        {teksti}
        </button>
    )
}

const Statistics = ({hyva, neutraali, huono}) => {
        const lkm = hyva+neutraali+huono
        const keskiarvo = (hyva-huono)/lkm
        const positiivisia = hyva/lkm
        if (hyva === 0 && neutraali === 0 && huono === 0){
            return (
                <p>ei yhtään palautetta annettu</p>
            )
        }
        return (

        <table>
            <tbody>
                <Statistic nimi={"hyvä"} arvo={hyva} />
                <Statistic nimi={"neutraali"} arvo={neutraali} />
                <Statistic nimi={"huono"} arvo={huono} />
                <Statistic nimi={"keskiarvo"} arvo={keskiarvo.toFixed(1)} />
                <Statistic nimi={"positiivisia"} arvo={(100 * positiivisia).toFixed(1) + " %"} />
            </tbody>
        </table>
        )
}

const Statistic = ({nimi, arvo}) => (
        <tr>
            <td>{nimi}&nbsp;</td>
            <td>{arvo}</td>
        </tr>
)

ReactDOM.render(<App />, document.getElementById('root'));
