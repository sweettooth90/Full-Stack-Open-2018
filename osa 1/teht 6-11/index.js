import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    handleAction = (value) => () => {
        if (value === 'good') {
            this.setState({ good: this.state.good + 1 })
        } else if (value === 'neutral') {
            this.setState({ neutral: this.state.neutral + 1 })
        } else if (value === 'bad') {
            this.setState({ bad: this.state.bad + 1 })
        } else if (value === 'reset') {
            this.setState({ good: 0, neutral: 0, bad: 0 })
        }
    }

    render() {
        return (
            <div>
                <Title title="Give feedback" />
                <Button handleClick={this.handleAction('good')} text="Good" />&nbsp;
                <Button handleClick={this.handleAction('neutral')} text="Neutral" />&nbsp;
                <Button handleClick={this.handleAction('bad')} text="Bad" />&nbsp;
                <Button handleClick={this.handleAction('reset')} text="Reset" />&nbsp;
                <Title title="statistics" />
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
            </div>
        )
    }
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Title = ({ title }) => (
    <h2>{title}</h2>
)

const Statistics = ({ good, neutral, bad }) => {
    const amount = good + neutral + bad
    const average = ((good - bad) / amount).toFixed(1)
    const positive = (100 * (good / amount)).toFixed(1) + "%"
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>no given feedback</div>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic name={"Good"} value={good} />
                <Statistic name={"Neutral"} value={neutral} />
                <Statistic name={"Bad"} value={bad} />
                <Statistic name={"Average"} value={average} />
                <Statistic name={"Positive"} value={positive} />
            </tbody>
        </table>
    )
}

const Statistic = ({ name, value }) => (
    <tr>
        <td>{name}&nbsp;</td>
        <td>{value}</td>
    </tr>
)

ReactDOM.render(<App />, document.getElementById('root'))
