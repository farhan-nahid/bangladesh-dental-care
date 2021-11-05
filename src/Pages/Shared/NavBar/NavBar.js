/* import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
 */

import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
  const { loggedInUser, logOut } = useAuth();
  console.log(loggedInUser);
  return (
    <Navbar className='navbar' expand='lg'>
      <div className='container text-center'>
        <Navbar.Brand as={NavLink} to='/' className='title'>
          Doctor Bari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            <Nav.Link as={NavLink} to='/home' activeClassName='active'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about' activeClassName='active'>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to='/services' activeClassName='active'>
              Services
            </Nav.Link>
            {!loggedInUser ? (
              <Nav.Link as={NavLink} to='/register' className='main__button'>
                Register
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>{loggedInUser.displayName}</Nav.Link>
                <Nav.Link className='main__button' onClick={logOut}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
