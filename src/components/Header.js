import React from 'react'
import { NavLink as Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
     <div className='container'>
        <div className='header_inner'>
          <div className='header_logo'>
              <h2>CAT</h2>
          </div>
          <div className='navigation'>
              <Link to='/'>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
          </div>
          <div className='header_icons'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
     </div>
    </header>
  )
}

export default Header