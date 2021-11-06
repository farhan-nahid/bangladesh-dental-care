import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor: { name, img, work } }) => {
  return (
    <div className='doctor__card'>
      <div className='doctor__img'>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <h3>{work}</h3>
    </div>
  );
};

export default Doctor;
