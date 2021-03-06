import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const history = useHistory();
  const [services] = useServices();
  const sixService = services.slice(0, 6);

  return (
    <section className='container all__service'>
      <h1>Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus corporis voluptatibus temporibus,
      </p>
      {sixService.length ? (
        <div className='service__container'>
          {
            // map services data
            sixService.map((service) => (
              <Service key={service.id} service={service} />
            ))
          }
        </div>
      ) : (
        <div className='d-flex mt-5 pt-5 justify-content-center'>
          <Spinner animation='border' />
        </div>
      )}

      <div className='all__service__button'>
        <button
          className='main__button'
          onClick={() => history.push('/all-service')}
        >
          Our All Services
        </button>
      </div>
    </section>
  );
};

export default Services;
