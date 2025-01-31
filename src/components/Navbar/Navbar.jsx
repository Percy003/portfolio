import React , {useState} from 'react'
import './Navbar.css'
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen,setMenuOpen] =useState(false);

  return (
    <nav className='navbar'>
        <div className='logoDiv'>
            <img src={getImageUrl("prashantImage.jpg")} className='logo'/>
        </div>
        <div className='menu'>
            <img className='menuBtn'
             src={
                menuOpen?getImageUrl("closeIcon.png"):getImageUrl("menuIcon.png")
                }
                alt='menu-button'
                onClick={()=> setMenuOpen(!menuOpen)}
                />
            <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`}
            onClick={()=>setMenuOpen(false)}
            >
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contacts'>Contacts</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
