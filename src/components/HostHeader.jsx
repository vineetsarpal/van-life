import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HostHeader() {
    const activeStyle = {
        fontweight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <header>
            <nav className='host-nav'>
                <NavLink
                    to='.' 
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink to='income'  style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to='vans'  style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to='reviews'  style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
            </nav>
        </header>
    )
}

export default HostHeader
