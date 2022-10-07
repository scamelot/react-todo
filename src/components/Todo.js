import { useState, useEffect } from 'react'
import React from 'react'

const Todo = ({ todo, index, setComplete, setDelete }) => {

    const [status, setStatus] = useState(false)
    const [title, setTitle] = useState('')

    useEffect(() => {
        const updateTitle = () => {
            setTitle(todo.todo)
        }

        updateTitle()
    }, [todo.todo])

    const onClick = (e) => {
        e.preventDefault()
        setComplete(todo)
        setStatus((status) ? false : true)
        console.log('clicked!')
    }

    const onDelete = (e) => {
        e.preventDefault()
        setDelete(todo)
    }
    
    const style = {
        textDecorationLine: todo.completed ? 'line-through' : ''
    }

    return (
        <div>
            <h2
            onClick={onClick} style={style}>{index+1}: {title} </h2>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo

