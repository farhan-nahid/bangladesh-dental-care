import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='py-5'>
      <div className='container'>
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h5 className='fw-bold'>Doctor Bari</h5>
            <div className='social__media'>
              <a
                href='https://twitter.com/farhan__nahid'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href='https://www.facebook.com/dev.farhanNahid'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href='https://www.linkedin.com/in/farhan-nahid/'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href='https://www.instagram.com/farhan__nahid/'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <p className='mt-3'>
              <small>
                {' '}
                Copyright &copy; {new Date().getFullYear()}
                by Farhan. <br /> All Rights Reserved.
              </small>
            </p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h5 className='fw-bold'>COLUMBIA</h5>
            <p>
              7140 Wehner Tunnel <br /> Washington, D.C
            </p>
            <h5 className='fw-bold mt-5'>NEW MEXICO</h5>
            <p>
              10 Maggie Valleys, <br />
              United States
            </p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h5 className='fw-bold'>WORK INQUIRIES</h5>
            <p>
              Interested in working with us? <br />
              <a href='mailto:dev.farhan.nahid@gmail.com'>
                {' '}
                dev.farhan.nahid@gmail.com
              </a>
            </p>
            <h5 className='fw-bold mt-5'>PHONE</h5>
            <p>
              <a href='tel:+1 800 356789142'>+1 800 356789142</a> <br />
              <a href='tel:+1 800 356789142'>+1 800 356789142</a>
            </p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h5 className='fw-bold'>STAY IN TOUCH</h5>
            <Form className='d-flex mt-3'>
              <Form.Control type='email' placeholder='Enter Email' />
              <Button variant='danger'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
