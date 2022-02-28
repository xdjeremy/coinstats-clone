import React from 'react';
import './Header.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <ul className='navigation'>
        <Link to='/portfolio'>
          <li component={Link} to={'/portfolio'} className='portfolio-tracker'>
            Portfolio Tracker
          </li>
        </Link>
        <Link to='/coins'>
          <li className='coins'>Coins</li>
        </Link>
        <Link to='/pricing'>
          <li className='pricing'>Pricing</li>
        </Link>
        <Link to='/wallet'>
          <li className='wallet'>Wallet</li>
        </Link>
      </ul>
      <ul className='settings'>
        <li id='currency'>USD</li>
        <li id='language'>EN</li>
        <li>
          <input
            type='text'
            className='search'
            id='search'
            placeholder='Search'
          ></input>
        </li>
        <li id='login' className='login'>
          LOGIN
        </li>
        <li id='get-started' className='get-started'>
          GET STARTED
        </li>
      </ul>
    </header>
  );
};

export default Header;
