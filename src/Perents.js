import React from 'react'

import Comp1 from './component/Comp1'
import Comp2 from './component/Comp2'
import Comp3 from './component/Comp3'
import State from './component/State'

function Perents() {
    const name = "Kulwinder"
    const state = "Punjab"
    const pack = "Jacket"
    const district = "jalabad"
    const pincode = "152024"
    return (
        <div>
            <Comp1 name={name} />
            <Comp2 name={state} district={district} pincode={pincode} />
            <Comp3 name={pack} />
            <State />
        </div>
    )
}

export default Perents;



// import React, { useState } from 'react'

// const Perents = () => {
//     const [name, setName] = useState('Shalinder')

//     const nameChanged = (e) => {
//         // e.preventDefault();
//         setName('Kulwinder')
//     }
//     return (
//         <div>
//             {name}
//             <button onClick={nameChanged}>Change Name</button>
//         </div>
//     )
// }

// export default Perents
