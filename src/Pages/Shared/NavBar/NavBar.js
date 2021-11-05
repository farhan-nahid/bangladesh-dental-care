import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav className='container'>
        <ul className='web__title'>
          <li>
            <NavLink exact to='/'>
              Doctor Bari
            </NavLink>
          </li>
        </ul>

        <input type='checkbox' id='click' />
        <label for='click' className='menu__button'>
          <i className='fas fa-bars'></i>
        </label>

        <ul className='nav__items'>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>

          <>
            <li>
              <NavLink to='/register'>
                <button className='main__button'>Register</button>
              </NavLink>
            </li>
          </>

          <>
            <li>loggedInUser.displayName</li>
            <li>
              <button className='main__button'>Logout</button>
            </li>
          </>

          <li>
            <NavLink to='/cart'>
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
