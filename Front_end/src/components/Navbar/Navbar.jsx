import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/frontend_assets/assets'
import './navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("menu")
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />

            <ul className='navbar-menu'>
                <Link
                    onClick={() => setMenu("home")}
                    to="/"
                    className={menu === 'home' ? "active" : ""}
                >
                    Home

                </Link>

                <a
                    onClick={() => setMenu("menu")}
                    href="#explore-menu"
                    className={menu === 'menu' ? "active" : ""}
                >
                    Menu
                </a>


                <a
                    onClick={() => setMenu("mobile-app")}
                    href="#app-download"
                    className={menu === 'mobile-app' ? "active" : ""}
                >
                    Mobile-app
                </a>


                <a
                    onClick={() => setMenu("contact-us")}
                    href="#footer"
                    className={menu === 'contact-us' ? "active" : ""}
                >
                    Contact us
                </a>

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
