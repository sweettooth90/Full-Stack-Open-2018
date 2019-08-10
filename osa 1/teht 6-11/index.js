import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title='give feedback' />
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatsValues = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const totalAmount = good + neutral + bad
  const average = (good - bad) / totalAmount
  const positive = 100 * (good / totalAmount) + '%'

  return (
    <table>
      {totalAmount === 0 ?
        'No feedback given'
        :
        <tbody>
          <StatsValues text='good' value={good} />
          <StatsValues text='neutral' value={neutral} />
          <StatsValues text='bad' value={bad} />
          <StatsValues text='all' value={totalAmount} />
          <StatsValues text='average' value={average} />
          <StatsValues text='positive' value={positive} />
        </tbody>
      }
    </table>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
