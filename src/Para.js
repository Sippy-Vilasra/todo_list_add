import React, { useState } from 'react'

const Para = () => {
    const [number, setNumber] = useState(0)

    const clickme = (e) => {
        e.preventDefault();
        setNumber(number + 1)
    }
    const minus = (e) => {
        e.preventDefault();
        setNumber(number - 1)
    }
    return (
        <div>
            {number}<br /><br />
            <button onClick={clickme}>+</button>
            <button onClick={minus}>-</button>

        </div >
    )
}

export default Para
