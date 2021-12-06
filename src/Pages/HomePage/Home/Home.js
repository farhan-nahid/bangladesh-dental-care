import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Bangladesh Dental care';
  }, []);

  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <Counter />
      <Blogs />
    </>
  );
};

export default Home;
