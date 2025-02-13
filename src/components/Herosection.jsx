import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate()
  const nav = ()=>{
    navigate('/getting-started')
  }
  return (
    <section className="bg-gray-100 text-blue-600 py-20 px-5 text-center" id='hero'>
        
      <h1 className="text-4xl font-bold mb-4">Apply Now for MBBS Abroad</h1>
      <p className="text-lg mb-6">Discover top destinations and secure your future in medicine.</p>
      <button className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium" onClick={nav}>
        Apply Now
      </button>
    </section>
  );
};

export default HeroSection;
