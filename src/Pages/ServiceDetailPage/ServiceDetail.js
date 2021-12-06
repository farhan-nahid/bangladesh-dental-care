import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const [services] = useServices();
  const history = useHistory();
  // const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    document.title = 'Service Details | Bangladesh Dental care';
  }, []);

  //useParams is not working in private route. thats why i using useLocation
  // const id = location.pathname.slice(10, 11);
  const selected = services.find((service) => service.id === Number(id));

  return (
    <>
      {selected ? (
        <section className='container service__details'>
          <img src={selected.img} alt={selected.name} />
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
          <h3>Price : {selected.price}</h3>
          <button className='main__button' onClick={() => history.push('/')}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
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
