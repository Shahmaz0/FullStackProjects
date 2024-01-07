
import React from 'react'
import './App.css'

//custom hooks
function useTodos() {
  const [todos, setTodo] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET" 
    }).then((Response) => {
      Response.json().then((data) => {
        console.log(data);
        setTodo(data);
      })
    });

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
      method: "GET" 
    }).then((Response) => {
      Response.json().then((data) => {
        console.log(data);
        setTodo(data);
      })
    });
    }, 1000)
  }, []);

  return todos;
}
function App() {
  const todos = useTodos();
 

  return (
    <div>
        {todos.map((todo) => {
          return <div key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <button>Delete</button>
            <br />
          </div>
        })}
    </div>
  )
}
export default App
