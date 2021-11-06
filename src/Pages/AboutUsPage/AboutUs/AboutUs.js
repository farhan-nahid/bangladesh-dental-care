import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import about from '../../../assets/images/about-us.jpg';
import './AboutUs.css';

const AboutUs = () => {
  const skill1 = 90;
  const skill2 = 85;
  const skill3 = 80;
  const skill4 = 75;
  const skill5 = 70;
  const skill6 = 65;

  return (
    <div className='about__us container'>
      <div>
        <img src={about} alt='about' />
      </div>
      <div className='content'>
        <div>
          <h2>Welcome To Bangladesh Dental Care </h2>
          <p>
            Bangladesh Dental Care improve our smiles and overall appearance.
            Not only do they make us look better, but also make our life easier.
            Enjoy simple things as food, conversation, and a smile. Forget about
            uncomfortable social encounters. Our focus is on your overall
            well-being and helping you achieve optimal health and esthetics.
          </p>
        </div>
        <div className='our__skills'>
          <h2>Our Skills</h2>
          <div>
            <h3>Teeth Whitening</h3>
            <ProgressBar
              animated
              now={skill1}
              label={`${skill1}%`}
              variant='danger'
            />
          </div>
          <div>
            <h3>Orthodontics</h3>
            <ProgressBar
              animated
              now={skill2}
              label={`${skill2}%`}
              variant='danger'
            />
          </div>
          <div>
            <h3>Routine Dental Exam</h3>
            <ProgressBar
              animated
              now={skill3}
              label={`${skill3}%`}
              variant='danger'
            />
          </div>
          <div>
            <h3>Tooth Extraction</h3>
            <ProgressBar
              animated
              now={skill4}
              label={`${skill4}%`}
              variant='danger'
            />
          </div>
          <div>
            <h3>Dental Fillings</h3>
            <ProgressBar
              animated
              now={skill5}
              label={`${skill5}%`}
              variant='danger'
            />
          </div>
          <div>
            <h3>Root Canal Treatment</h3>
            <ProgressBar
              animated
              now={skill6}
              label={`${skill6}%`}
              variant='danger'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
