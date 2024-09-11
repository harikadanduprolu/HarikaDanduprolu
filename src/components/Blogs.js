import React from 'react';
import './Blogs.css'; // Separate CSS file for styling

const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary: 'React Hooks are functions that let you use state and other React features without writing a class. In this post, we dive deep into how Hooks work and their benefits.',
    link: '/blogs/react-hooks'
  },
  {
    id: 2,
    title: 'Introduction to Node.js',
    summary: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Learn how it works and why it is popular for building scalable network applications.',
    link: '/blogs/nodejs-intro'
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    summary: 'Both CSS Grid and Flexbox are powerful tools for creating layouts. This post compares them to help you decide which to use for your projects.',
    link: '/blogs/css-grid-vs-flexbox'
  }
  // Add more blog posts as needed
];

function Blogs() {
  return (
    <div className="blogs-container">
      <h2 className="blogs-heading">Blog Posts</h2>
      <div className="blogs-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-summary">{blog.summary}</p>
            <a href={blog.link} className="blog-link">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
