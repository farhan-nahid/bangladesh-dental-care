import React from 'react';
import { useHistory } from 'react-router-dom';
import error from '../../assets/images/404.png';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();
  return (
    <div className='container not__found'>
      <img src={error} alt='error' />
      <h1>Something went wrong.</h1>
      <p>This page couldn't be found in our server.</p>
      <button className='main__button' onClick={history.push('/')}>
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
