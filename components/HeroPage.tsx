"use client"

import React, { useState, useEffect } from 'react';

const HeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of carousel slides
  const slides = [
    {
      image: '/assets/images/gollila.jpg',
      title: 'Protect Environment, Secure Better Future',
      description: 'Empowering Communities for a Sustainable Future in the Virunga Region!',
    },
    {
      image: '/assets/images/Tree.jpg',
      title: 'Preserve Nature, Ensure Sustainability',
      description: 'Together we can make a difference for future generations.',
    },
    {
      image: '/assets/images/2.jpeg',
      title: 'Explore the Beauty of Nature',
      description: 'Discover and protect the wonders around you.',
    },
  ];

  // Automatic slide change every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Carousel Slide */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
          {slides[currentIndex].title}
        </h1>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default HeroPage;
