import React from 'react';
import { Spinner } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const AllService = () => {
  const [services] = useServices();

  return (
    <section className='container all__service'>
      <h1>Our all Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus corporis voluptatibus temporibus,
      </p>
      {services.length ? (
        <div className='service__container'>
          {
            // map services data
            services.map((service) => (
              <SingleService key={service.id} service={service} />
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

export default AllService;
