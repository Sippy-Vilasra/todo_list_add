import React, { createContext } from 'react'
import ComB from './ComB'

const BioData = createContext();

const ComA = () => {
    return (
        <BioData.Provider value={'Sippy Vilasra'}>
            <ComB />
        </BioData.Provider>
    )
}

export default ComA
export { BioData };
