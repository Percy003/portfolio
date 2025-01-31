import React from 'react'
import { getImageUrl } from '../../utils'
import './Contact.css'

export const Contact = () => {
  return (
    <footer className='fContainer' id='contacts'>
      <div className='fText'>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className='fLinks'>
        <li className='fLink'>
          <img src={getImageUrl("email.png")} alt="Email Icon" />
          <a href='mailto:percy8065@gmail.com'>percy8065@gmail.com</a>
        </li><li className='fLink'>
          <img src={getImageUrl("github.png")} alt="GitHub Icon" />
          <a href='https://github.com/Percy003'>github.com/Percy003</a>
        </li>
      </ul>
    </footer>
  )
}
