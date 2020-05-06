import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = props => {
    return(
      <h1>{props.course.name}</h1>
    )
  }
  
  const Content = props => {
    return(
      <>
        <Part props= {props.parts[0]}/>
        <Part props= {props.parts[1]}/>
        <Part props= {props.parts[2]}/>
      </>
    )
  }
  
  const Part = props => {
    return(<p>{props.props.name} {props.props.exercises}</p>)
  }
  
  const Total = props => {
    return(<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
  }

  return (
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))