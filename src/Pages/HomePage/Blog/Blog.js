import React from 'react';
import './Blog.css';

const Blog = ({ blog: { title, img, description } }) => {
  return (
    <div className='blog__card'>
      <div className='blog__img'>
        <img src={img} alt={title} />
      </div>
      <h3 className='date'>7 Nov 2021</h3>
      <h3>{title}</h3>
      <p>{description.slice(0, 130)}</p>
    </div>
  );
};

export default Blog;
