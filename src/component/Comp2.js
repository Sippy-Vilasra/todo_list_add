import React, { useState } from 'react'

const Comp2 = () => {
    const [myObject, setmyObject] = useState({
        myName: 'Sippy', myAge: 28, degree: "BCA"
    });
    const changeObject = () => {
        setmyObject({ ...myObject, myName: 'happy' })
    }

    return (
        <div>
            <h1>Name: {myObject.myName} &Age:{myObject.myAge} & Degree:{myObject.degree}</h1>
            <button onClick={changeObject}>Update</button>
        </div>
    )
}

export default Comp2


