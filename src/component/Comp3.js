import React, { useState } from 'react'

const Comp3 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setallEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString, email, password }
            setallEntry([...allEntry, newEntry]);

            setEmail('');
            setPassword('');
        } else {
            alert('plz fill the data')
        }
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' id='password' autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElem) => {
                        const { id, email, password } = curElem
                        return (
                            <div key={id}> <p>{email}</p>
                                <p>{password}</p></div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comp3

