import {
  faClock,
  faUser,
  faUserInjured,
  faUserMd,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Counter.css';

const Counter = () => {
  return (
    <section className='counter'>
      <div className='container counter__container'>
        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h5>1550</h5>
          <p>Satisfied Patients</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faUserInjured} />
          </span>
          <h5>550</h5>
          <p>Successful Surgeries</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <h5>9200</h5>
          <p>Work Hours</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faUserMd} />
          </span>
          <h5>60</h5>
          <p>Specialist Doctors</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
