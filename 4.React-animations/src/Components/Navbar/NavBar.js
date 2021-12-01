import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>
                Liste
            </Link>
            <Link to='/stateAnim'>
                State
            </Link>
            <Link to='/scroll'>
               Scroll
            </Link>
        </nav>
    )
}
