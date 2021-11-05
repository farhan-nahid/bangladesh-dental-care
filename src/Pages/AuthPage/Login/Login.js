import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login.png';
import './Login.css';

const Login = () => {
  const handleEmailLogin = (e) => {
    e.preventDefault();
  };

  return (
    <section className='container grid__container'>
      <div>
        <img src={login} alt='login' />
      </div>
      <div className='login__signUp__methods'>
        <form onSubmit={handleEmailLogin}>
          <div class='single__input'>
            <label htmlFor='loginEmail'>Your Email</label>
            <input
              id='loginEmail'
              class='effect-3'
              type='email'
              placeholder='Enter Your Email'
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              required
            />
            <span class='focus-border'></span>
          </div>
          <div class='single__input'>
            <label htmlFor='loginPassword'>Your Password</label>
            <input
              id='loginPassword'
              class='effect-3'
              type='password'
              placeholder='Enter Your Password'
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              required
            />
            <span class='focus-border'></span>
          </div>
          <input type='submit' value='Login' />
        </form>
        <p className='toggle__link'>
          Don't have any Account? <Link to='/register'>Sign up</Link>
        </p>

        <h5 className='other__methods'>OR</h5>

        <button className='google__button'>
          <FontAwesomeIcon icon={faGoogle} />
          Google sign in
        </button>
        <button className='github__button'>
          <FontAwesomeIcon icon={faGithub} />
          GitHub sign in
        </button>
      </div>
    </section>
  );
};

export default Login;
