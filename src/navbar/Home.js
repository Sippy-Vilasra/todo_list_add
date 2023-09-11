import React from 'react'
import { useLoction } from "react-router-dom";
const Home = () => {
    const loction = useLoction();
    return (
        <div>
            <h1>Hello {loction.pathname.replace("/", "")} page</h1>
        </div>
    )
}

export default Home
