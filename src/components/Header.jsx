import React from 'react'
import {Link} from "react-router-dom"
import '../index.css';

const Header = () => {
  return (
    <header>
     <Link className="site-logo" to="/">#Vanlife</Link>
     <nav>
      <Link to="/host">Host</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
     </nav>
    </header>
  )
}

export default Header