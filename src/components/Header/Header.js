import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'


function Header() {
  return (
    <header>
        <img className='logo' alt='logo' src={logo}/>
        <ul className='navBar'>
            <li><NavLink className='navBar_link'>Accueil</NavLink></li>
            <li><NavLink className='navBar_link'>Profil</NavLink></li>
            <li><NavLink className='navBar_link'>Réglages</NavLink></li>
            <li><NavLink className='navBar_link'>Communauté</NavLink></li>
        </ul>
    </header>
  )
}

export default Header