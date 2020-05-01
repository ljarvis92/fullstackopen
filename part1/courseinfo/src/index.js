import React from 'react'
import ReactDOM from 'react-dom'

const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = () => {
  const course = 'Half Stack application development'
  return(
    <h1>{course}</h1>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  return(
    <>
      <Part part= {part1} exercises= {exercises1}/>
      <Part part= {part2} exercises= {exercises2}/>
      <Part part= {part3} exercises= {exercises3}/>
    </>
  )
}

const Part = (props) => {
  return(<p>{props.part} {props.exercises}</p>)
}

const Total = () => {
  return(<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)
}

const App = () => {
  return (
    <>
      <Header/>
      <Content/>
      <Total/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))