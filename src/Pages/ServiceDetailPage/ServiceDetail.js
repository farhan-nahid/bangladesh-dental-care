import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const [services] = useServices();
  const history = useHistory();
  const location = useLocation();

  //useParams is not working in private route. thats why i using useLocation
  const id = location.pathname.slice(10, 11);
  const selected = services.find((service) => service.id === Number(id));

  return (
    <>
      {selected ? (
        <section className='container service__details'>
          <img src={selected.img} alt={selected.name} />
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
          <h3>Price : {selected.price}</h3>
          <button className='main__button' onClick={() => history.goBack()}>
            Back
          </button>
        </section>
      ) : (
        <div className='d-flex mt-5 pt-5 justify-content-center'>
          <Spinner animation='border' />
        </div>
      )}
    </>
  );
};

export default ServiceDetail;
