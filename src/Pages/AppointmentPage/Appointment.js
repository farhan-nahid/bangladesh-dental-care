import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import './Appointment.css';

const Appointment = () => {
  const { loggedInUser } = useAuth();
  const [services] = useServices();

  return (
    <section className='container appointment'>
      <h1>How can we Help You?</h1>
      <Form className='appointment__form'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your Name'
              defaultValue={loggedInUser.displayName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              defaultValue={loggedInUser.email}
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='Your Address' autoComplete='nope' />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='Your City' autoComplete='nope' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridService'>
            <Form.Label>Your Problem</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              {services.map((service) => (
                <option key={service.id}>{service.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridDoctor'>
            <Form.Label>Your Doctor</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>Abul Kashem</option>
              <option>Morjina Khatun</option>
              <option>Sokina Akter</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='danger' type='submit'>
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Appointment;
