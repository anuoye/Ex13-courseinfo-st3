const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )

}






const Content = (props) => {
  
  return (
    <div>
      <p>{props.part.name}</p>
      <p>{props.part.exercises}</p>
    </div>
  )
}

 











const App = () => {
  

  //const exercises1 = 10
  
  //const exercises2 = 7
  //const exercises3 = 14
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  console.log(part1)
  return (
    <div>
      <div>
      <Header course={course} />
      <Content part={part1} /> 
      <Content part={part2} /> 
      <Content part={part3} /> 
      total is {10 + 7 + 14 }
    </div>
    </div>
  )
}

export default App