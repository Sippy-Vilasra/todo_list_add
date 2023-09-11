import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/About">Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Pricing</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/">Action</NavLink>
                            <NavLink className="dropdown-item" to="/">Another action</NavLink>
                            <NavLink className="dropdown-item" to="/">Something else here</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar1
