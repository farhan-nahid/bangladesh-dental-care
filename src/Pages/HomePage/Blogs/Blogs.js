import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.npoint.io/a9f159e2041cce2881a2')
      .then((res) => setBlogs(res.data))
      .catch((err) => toast.error('Something went wrong'));
  }, []);

  return (
    <section className='container all__blog'>
      <h1>Our Blogs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus corporis voluptatibus temporibus,
      </p>
      {blogs.length ? (
        <div className='blog__container'>
          {
            // map services data
            blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
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

export default Blogs;
