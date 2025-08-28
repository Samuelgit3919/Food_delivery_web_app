import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/frontend_assets/assets'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />

            <ul className='navbar-menu'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/mobile-app"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Mobile-app
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Contact us
                    </NavLink>
                </li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
