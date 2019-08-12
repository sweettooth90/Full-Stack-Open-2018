import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const copy = [...points]
  const mostVotes = Math.max(...points)

  return (
    <div>
      <Title title='Anecdote of the day' />
      <b>{props.anecdotes[selected]}</b>
      <Votes amount={points[selected]} />
      <p>
        <Button handleClick={() => { copy[selected]++ , setPoints(copy) }} text='vote' />
        <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      </p>
      <Title title='Anecdote with most votes' />
      <p><b>{props.anecdotes[points.indexOf(mostVotes)]}</b></p>
      <Votes amount={mostVotes} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Votes = ({ amount }) => (
  <div>has {amount} votes</div>
)


const Title = ({ title }) => (
  <h1>{title}</h1>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
