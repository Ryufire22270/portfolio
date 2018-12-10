import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <nav>
        <ul className='user-list'>
          <li className="user-link"><Link to='/contactme'>Contact me</Link></li>
        </ul>
        <img className="TBA" src="https://www.fillmurray.com/g/200/300" title="source: fillmurray.com" />
        <ul className='home-list'>
          <li className="home-links"><Link to='/'>Home</Link></li>
          <li className="home-links"><Link to='/aboutme'>About Me</Link></li>
          <li className="home-links"><Link to='/projects'>My Projects</Link></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
