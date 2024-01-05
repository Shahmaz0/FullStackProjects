
import React from 'react'
import './App.css'

var count = 0;
function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Go to gym at 7pm",
    id: 1
  });

  console.log("render");
  if (count === 0){
    setInterval(() => {
      setTodoForToday({
        title: "I'll go to gym today",
        description: " At 7pm sharp",
        id: 1
      })
    },3000)

    count = 1;

  }

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
