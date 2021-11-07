import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import useAuth from '../../../hooks/useAuth';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import './NavBar.css';

const NavBar = () => {
  const { loggedInUser } = useAuth();

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
            <Nav.Link as={NavLink} to='/doctors' activeClassName='active__item'>
              Our Doctors
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to='/appointment'
              activeClassName='active__item'
            >
              Appointment
            </Nav.Link>
            {!loggedInUser ? (
              <Nav.Link as={NavLink} to='/login' className='main__button'>
                <FontAwesomeIcon icon={faSignInAlt} /> Log In
              </Nav.Link>
            ) : (
              <ProfilePopper />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
