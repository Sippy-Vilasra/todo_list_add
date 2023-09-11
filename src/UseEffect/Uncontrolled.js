import React, { useRef, useState } from 'react'
import { FcApproval } from "react-icons/fc";
const Uncontrolled = () => {

    const luckyName = useRef(null)
    const [show, setShow] = useState(false)

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert('plz fill the data') : setShow(true);
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">Enter your LuckyName</label>
                    <input type="text" id='luckyName' ref={luckyName} />
                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? `your lucky Name is ${luckyName.current.value}` : ""}<FcApproval /></p>
        </>
    )
}

export default Uncontrolled
