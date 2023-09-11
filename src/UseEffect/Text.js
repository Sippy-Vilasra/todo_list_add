import React, { useState } from 'react'
import UseTextCount from './UseTextCount'


const Text = () => {
    const [count, setCount] = useState(0)

    UseTextCount(count)

    return (
        <div>
            <h1>{count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>Text Click</button>
        </div>
    )
}

export default Text
