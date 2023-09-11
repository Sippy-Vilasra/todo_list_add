import React, { useEffect } from 'react'

const UseEffectapi = () => {

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users/USERNAME')

        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        getUsers();
    });
    return (
        <>
            <h2>List of Github User</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>
                    <div className='col-10 col-md-4 mt-5'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectapi
