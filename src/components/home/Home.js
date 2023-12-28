import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="text-container">
        <h1 className="text-light">Welcome to SkillSync</h1>
        <p className="text-light">Explore amazing features and content on our platform.</p>
        <Link to="/login" className="btn btn-dark">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
