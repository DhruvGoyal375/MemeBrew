import React from 'react'
import logo from "../images/troll-face-png-1.png"

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} className='header--img'/>
        <h2 className='header--title'>Meme Brew</h2>
        <h4 className='header--contact'>Contact</h4>
    </header>
  )
}

export default Header