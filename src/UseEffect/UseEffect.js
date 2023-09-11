import React, { useState, useEffect } from 'react'


const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('I am first one')
        if (count >= 1) {
            document.title = `Chats(${count})`
        }
        else {
            document.title = `Chats`
        }
    }, [count]);
    useEffect(() => {
        console.log("i am fine")
    }, [])
    console.log('hello outside')
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default UseEffect
