import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='header-container'>
       <div className="image-container">
        <img className='logo-img' src={LOGO_URL}></img>
       </div>
       <div className="list-container">
        <ul className="list-item">
            <li>About</li>
            <li>Contact</li>
            <li>More</li>
            <li>Cart</li>
        </ul>
       </div>
    </div>
  )
}

export default Header