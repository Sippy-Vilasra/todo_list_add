import React, { useContext } from 'react'
import { BioData } from './ComA';


const ComC = () => {
    const name = useContext(BioData);
    return (
        <>
            <h1>my name is {name}</h1>
        </>
    )
}

export default ComC
