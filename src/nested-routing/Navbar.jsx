import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuopen, setmenuOpen] = useState(false);

    const toggleMenu = () => setmenuOpen(!menuopen);
    return (

        <nav>
            {/* logo */}

            <NavLink to='/' className="logo">
                My Website
            </NavLink>

            {/* hamburgur menu icon */}
            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* nav links */}
            <ul className={menuopen ? 'show' : ''}>
                {/* home */}
                <li>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setmenuOpen(false)}
                    >
                        Home
                    </NavLink>
                </li>
                {/* about */}
                <li>
                    <NavLink
                        to='/about'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setmenuOpen(false)}
                    >
                        About
                    </NavLink>
                </li>
                {/* service */}
                <li>
                    <NavLink
                        to='/services'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setmenuOpen(false)}
                    >
                        Services
                    </NavLink>
                </li>

            </ul>
        </nav >


    )
}

export default Navbar
