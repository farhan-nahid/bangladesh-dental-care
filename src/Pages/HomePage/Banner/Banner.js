import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import first from '../../../assets/images/slider1.png';
import second from '../../../assets/images/slider2.png';
import third from '../../../assets/images/slider3.png';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel className='bg-light' pause='false'>
      <Carousel.Item>
        <div className='container'>
          <Row className='my-5 py-5 g-5'>
            <Col md={6} sm={12} xs={12}>
              <h3 className='banner__heading'>
                Professional & highly trained Dental Staff
              </h3>
              <p>
                We are protect your teeth any kind of problems. Our Team will
                give you best solution for your teeth
              </p>
              <button className='main__button'>Learn More</button>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <img className='banner__image' src={first} alt='First slide' />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
          <Row className='my-5 py-5 g-5'>
            <Col lg={6} md={12} sm={12} xs={12}>
              <h3 className='banner__heading'>
                Professional & highly trained Dental Staff
              </h3>
              <p>
                We are protect your teeth any kind of problems. Our Team will
                give you best solution for your teeth
              </p>
              <button className='main__button'>Learn More</button>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <img className='banner__image' src={second} alt='Second slide' />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
          <Row className='my-5 py-5 g-5'>
            <Col md={6} sm={12} xs={12}>
              <h3 className='banner__heading'>
                Professional & highly trained Dental Staff
              </h3>
              <p>
                We are protect your teeth any kind of problems. Our Team will
                give you best solution for your teeth
              </p>
              <button className='main__button'>Learn More</button>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <img className='banner__image' src={third} alt='Third slide' />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
