import React, { useReducer } from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const initialState = 0;

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const Usereducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const changeNumber = (a) => dispatch({ type: "INCREMENT" });
    const changeNumbers = (a) => dispatch({ type: "DECREMENT" });
    return (
        <div>
            <h2> <HiArrowNarrowRight /> {state}</h2>
            <button onClick={changeNumber}>Update data [+]</button>
            =
            <button onClick={changeNumbers}>Update data [-]</button>
        </div>
    )
}

export default Usereducer
