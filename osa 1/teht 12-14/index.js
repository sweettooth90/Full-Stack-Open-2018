import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: 0
    }
  }

  voteAnecdote = () => {
      this.setState({
        votes: anecdotes[this.state.selected].votes = anecdotes[this.state.selected].votes + 1
      })
  }

  randomAnecdote = () => {
    this.setState({
        selected: Math.floor(Math.random()*anecdotes.length)
    })
  }

  render() {
    const mapVotes = anecdotes.map((anecdotes) => anecdotes.votes)
    const mostPopular = mapVotes.indexOf(Math.max(...mapVotes))
    return(
      <div>
        <p>{anecdotes[this.state.selected].anecdoteName}</p>
        <p>has {anecdotes[this.state.selected].votes} votes</p>
        <button onClick={this.voteAnecdote}>vote</button>&nbsp;
        <button onClick={this.randomAnecdote}>next anecdote</button>
        <h3>anecdote with most votes:</h3>
        <p>{anecdotes[mostPopular].anecdoteName}</p>
        <p>has {anecdotes[mostPopular].votes} votes</p>
      </div>
    )
  }
}

const anecdotes = [
  {anecdoteName: 'If it hurts, do it more often', votes: 0},
  {anecdoteName: 'Adding manpower to a late software project makes it later!', votes: 0},
  {anecdoteName: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
  {anecdoteName: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
  {anecdoteName: 'Premature optimization is the root of all evil.', votes: 0},
  {anecdoteName: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)
