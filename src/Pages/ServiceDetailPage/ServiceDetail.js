import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const [services] = useServices();
  const { id } = useParams();
  console.log(id);
  const history = useHistory();
  const selected = services.find((service) => service.id === Number(id));
  console.log(selected);
  return (
    <section className='container service__details'>
      <img src={selected?.img} alt={selected?.name} />
      <h3>{selected?.name}</h3>
      <p>{selected?.description}</p>
      <h3>Price : {selected?.price}</h3>
      <button className='main__button' onClick={() => history.goBack()}>
        Back
      </button>
    </section>
  );
};

export default ServiceDetail;
