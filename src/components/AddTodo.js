import { useState } from 'react'

const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(item)
        const res = await fetch('http://localhost:2121/todos/createTodo', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'todoItem': item
                })
            })
        onAdd({item})
        setItem('')
    }
    

    return (
        <form onSubmit={onSubmit} action='/todos/createTodo' method='POST'>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                name='todo'
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
