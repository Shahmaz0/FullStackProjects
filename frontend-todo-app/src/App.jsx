
import React from 'react'
import './App.css'


function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Go to gym at 7pm",
    id: 1
  });

  React.useEffect(() => {
    console.log("hi from useEffect");
  })
 

  return (
    <div>
        {todoForToday.title}
        <br />
        {todoForToday.description}
        <br />
        {todoForToday.id}
    </div>
  )
}
export default App
