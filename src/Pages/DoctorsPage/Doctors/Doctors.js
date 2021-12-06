import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    document.title = 'Doctors | Bangladesh Dental care';
  }, []);

  useEffect(() => {
    axios
      .get('https://api.npoint.io/354efa7b35aed4c43fee')
      .then((res) => setDoctors(res.data))
      .catch((err) => toast.error('Something went wrong'));
  }, []);

  return (
    <section className='container all__doctor'>
      <h1>Our Super Heros</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus corporis voluptatibus temporibus,
      </p>
      {doctors.length ? (
        <div className='doctor__container'>
          {
            // map doctors data
            doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
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

export default Doctors;
