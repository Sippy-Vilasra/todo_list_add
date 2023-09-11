import React, { useState } from 'react'

function State() {
    const [data, setData] = useState(0);
    const changeNumber = (a) => setData(data + 1);
    const changeNumbers = (a) => setData(data - 1)
    return (
        <div>
            <h2> {data}</h2>
            <button onClick={changeNumber}>Update data [+]</button>
            =
            <button onClick={changeNumbers}>Update data [-]</button>
        </div>
    )
}

export default State

