import React, { useState } from 'react'

const UseEffectApi = () => {
    const [myName, setMyName] = useState("Sippy Vilasra")
    const changeName = () => {
        let val = myName;
        if (val === "Sippy Vilasra") {
            setMyName("Dk Group")
        } else {
            setMyName("Sippy Vilasra")
        }

    }
    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={changeName}>click me plz</button>
        </div>
    )
}

export default UseEffectApi


