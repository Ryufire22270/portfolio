import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <nav>
        <img className="logo" src="https://res.cloudinary.com/divbx6fna/image/upload/v1544640614/MJ_Logo.png" title="source: cloudinary.com" alt="" />
        <ul className='home-list'>
          <li className="home-links"><Link to='/'>Home</Link></li>
          <li className="home-links"><Link to='/aboutme'>About Me</Link></li>
          <li className="home-links"><Link to='/myprojects'>My Projects</Link></li>
          <li className="home-link"><Link to='/contactme'>Contact me</Link></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
