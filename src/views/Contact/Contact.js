import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
    <nav>Contact</nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul></div>
  );
}

export default Contact;