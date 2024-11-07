import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imageUrl from "../assets/images/avatar-icon.png"

function Header() {

    const activeStyle = {
        fontweight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <header>
            <Link to='/'>#VANLIFE</Link>
            <nav>
                <NavLink to='/host' style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to='/about' style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to='/vans' style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                {/* <Link to='login' className='login-link'>
                    <img src={imageUrl} className='login-icon' />
                </Link> */}
            </nav>
        </header>
    )
}

export default Header
