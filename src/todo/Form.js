import React, { useState, useEffect } from 'react'
import Listto from './Listto';
import Todo1 from './Todo1';



const Form = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return (
        <div className='container' >
            <div className='app-wrapper'>
                <div>
                    <Todo1
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo} />

                </div>
                <div>
                    <Listto todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                </div>
            </div>

        </div>
    )
}

export default Form
