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

    random = () => this.setState({ selected: Math.floor(Math.random() * anecdotes.length) })

    vote = () => this.setState({ votes: anecdotes[this.state.selected].votes = anecdotes[this.state.selected].votes + 1 })

    render() {
        const mapVotes = anecdotes.map(anecdotes => anecdotes.votes)
        const mostVotes = mapVotes.indexOf(Math.max(...mapVotes))
        return (
            <div>
                <ShowAnecdote anecdote={anecdotes[this.state.selected].anecdote} />
                <Votes voteAmount={anecdotes[this.state.selected].votes} />
                <p>
                    <Button handleClick={this.vote} text="vote" />
                    <Button handleClick={this.random} text="next anecdote" />
                </p>
                <Title />
                <p>{anecdotes[mostVotes].anecdote}</p>
                <p>{anecdotes[mostVotes].votes} votes</p>
            </div>
        )
    }
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Title = ({ title }) => (
    <h3>anecdote with most votes:</h3>
)

const Votes = ({ voteAmount }) => (
    <div>This anecdote has {voteAmount} votes</div>
)

const ShowAnecdote = ({ anecdote }) => (
    <div>{anecdote}</div>
)

const anecdotes = [
    { anecdote: 'If it hurts, do it more often', votes: 0 },
    { anecdote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    { anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
