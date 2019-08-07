import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(part => <Part part={part} />)
  )
}

const Part = ({ part }) => {
  return (
    <div>{part.name} {part.exercises}</div>
  )
}

const Total = (props) => {
  return (
    <div>yhteensä {props.exercises} tehtävää</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
