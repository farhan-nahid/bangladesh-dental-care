import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login.png';

const Register = () => {
  const handleEmailSignup = (e) => {
    e.preventDefault();
  };

  return (
    <section className='container grid__container'>
      <div>
        <img src={login} alt='login' />
      </div>
      <div className='login__signUp__methods'>
        <form onSubmit={handleEmailSignup}>
          <div class='single__input'>
            <label htmlFor='registerName'>Your Name</label>
            <input
              id='registerName'
              class='effect-3'
              type='text'
              name='name'
              placeholder='Enter Your Full Name'
              autoComplete='off'
              spellCheck='false'
              required
            />
            <span class='focus-border'></span>
          </div>
          <div class='single__input'>
            <label htmlFor='registerEmail'>Your Email</label>
            <input
              id='registerEmail'
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
            <label htmlFor='registerPassword'>Your Password</label>
            <input
              id='registerPassword'
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
          <div class='single__input'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              id='confirmPassword'
              class='effect-3'
              type='password'
              placeholder='Re Type Your Password'
              autoComplete='off'
              spellCheck='false'
              autoCorrect='off'
              required
            />
            <span class='focus-border'></span>
          </div>
          <input type='submit' value='Register' />
        </form>
        <p className='toggle__link'>
          Already have Account? <Link to='/login'>Login</Link>
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

export default Register;
