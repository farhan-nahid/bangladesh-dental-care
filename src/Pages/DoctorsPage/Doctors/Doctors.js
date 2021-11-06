import React from 'react';
import { Spinner } from 'react-bootstrap';
import doctor1 from '../../../assets/images/doctor1.jpg';
import doctor2 from '../../../assets/images/doctor2.jpg';
import doctor3 from '../../../assets/images/doctor3.jpg';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
/* 


<a href="https://imgbb.com/"><img src="https://i.ibb.co/y4Bq4GV/blog1.jpg" alt="blog1" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/WD5Q6gK/blog2.jpg" alt="blog2" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/NyYG3hX/blog3.jpg" alt="blog3" border="0"></a>
<a href="https://ibb.co/GFPhV7k"><img src="" alt="doctor1" border="0"></a>
<a href="https://ibb.co/cFVgtyV"><img src="https://i.ibb.co/Ph0m4r0/doctor2.jpg" alt="doctor2" border="0"></a>
<a href="https://ibb.co/BrvxF1c"><img src="https://i.ibb.co/0F1Svwm/doctpr-3.jpg" alt="doctpr-3" border="0"></a>


*/

const doctors = [
  {
    id: 1,
    name: 'Abul Kashem',
    work: 'Teeth Whitening Expert',
    img: doctor1,
  },
  {
    id: 2,
    name: 'Morjina Khatun',
    work: 'Tooth Extraction Expert',
    img: doctor2,
  },
  {
    id: 3,
    name: 'Sokina Akter',
    work: 'Teeth Fillings Expert',
    img: doctor3,
  },
];

const Doctors = () => {
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
