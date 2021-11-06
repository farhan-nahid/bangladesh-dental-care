import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
  const { loggedInUser, logOut } = useAuth();
  console.log(loggedInUser);
  return (
    <Navbar className='navbar' expand='lg'>
      <Container className=' text-center'>
        <Navbar.Brand exact as={NavLink} to='/' className='title'>
          <img src={logo} alt='logo' />
          Bangladesh Dental Care
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            <Nav.Link as={NavLink} to='/home' activeClassName='active__item'>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/about-us'
              activeClassName='active__item'
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/services'
              activeClassName='active__item'
            >
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
