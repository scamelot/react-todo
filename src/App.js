import { useState, useEffect } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App() {

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    const todosFromServer = await fetchTodos()
    console.log(todosFromServer)
    setTodos(todosFromServer)
  }
  //Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch('http://localhost:2121/todos')
    const data = await res.json()
    console.log(data)

    return data
  }

  const setComplete = async (todo) => {
    let allTodos = [...todos]
    console.log('setting!')
    allTodos.find(x => x.id === todo.id).completed ^= true
    const response = await fetch('todos/markComplete', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              'todoIdFromJSFile': todo
          })
      })
    getTodos()
    }
  
  //delete
  const setDelete = async (todo) => {
    console.log(todo)
    const res = await fetch('http://localhost:2121/todos/deleteTodo', {
      method: 'delete',
      headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoId': todo._id,
                'test':'test'
            })
    })
    console.log(await res.json())
    getTodos()
    console.log(todos)
  }

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    setTodos([...todos.filter(x => x.todo !== todo.todo)])
    getTodos()
    console.log(todos)
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos} setComplete={setComplete} setDelete={setDelete}/>
    </div>
  );
}

export default App;
