import React from 'react';
import { useHistory } from 'react-router-dom';
import about from '../../../assets/images/about-us.jpg';
import './AboutUs.css';

const AboutUs = () => {
  const history = useHistory();

  return (
    <section className='about__us__bg'>
      <div className='about__us container'>
        <div className='about__img'>
          <img src={about} alt='about' />
        </div>
        <div className='content'>
          <div>
            <h2>Welcome To Bangladesh Dental Care </h2>
            <p>
              Bangladesh Dental Care improve our smiles and overall appearance.
              Not only do they make us look better, but also make our life
              easier. Enjoy simple things as food, conversation, and a smile.
              Forget about uncomfortable social encounters. Our focus is on your
              overall well-being and helping you achieve optimal health and
              esthetics.
            </p>
            <button
              className='main__button'
              onClick={() => history.push('/about-us')}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
