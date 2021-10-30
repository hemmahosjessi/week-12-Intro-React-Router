import React from "react"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1>
                <Link to='/'>My Company name</Link>
            </h1>

            <ul>
                <li>
                    <NavLink to='/about'>About us</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar