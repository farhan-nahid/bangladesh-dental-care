import React from 'react';
import { Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
// import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useServices();

  return (
    <section className='container all__service'>
      <h1>Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus corporis voluptatibus temporibus,
      </p>
      {services.length ? (
        <div className='service__container'>
          {
            // map services data
            services.map((service) => (
              <Service key={service.id} service={service} />
            ))
          }
        </div>
      ) : (
        <div className='d-flex mt-5 pt-5 justify-content-center'>
          <Spinner animation='border' />
        </div>
      )}
    </section>
  );
};

export default Services;
