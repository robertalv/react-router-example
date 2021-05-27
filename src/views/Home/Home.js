import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <nav>Home</nav>
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
export default Home;