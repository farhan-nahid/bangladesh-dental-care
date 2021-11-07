import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service: { id, name, img, price, description } }) => {
  const history = useHistory();

  return (
    <div className='service__card'>
      <div className='service__img'>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description.slice(0, 140)}</p>
      <h3>Price : {price}</h3>
      <button
        className='main__button'
        onClick={() => history.push(`/services/${id}`)}
      >
        Book {name}
      </button>
    </div>
  );
};

export default Service;
