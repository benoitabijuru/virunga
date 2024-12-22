import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-green-700 mb-12 animate-fade-in">
        Our Projects
      </h2>

      {/* Project 1 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
        {/* Text */}
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 animate-slide-left">
            Climate Change and Energy
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-left animation-delay-200">
            Tackling climate change through innovative energy solutions and sustainable practices that empower communities.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/images/gollila.jpg"
            width={500}
            height={350}
            alt="Climate Change and Energy"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/images/Tree.JPG"
            width={500}
            height={350}
            alt="Environmental Protection"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in"
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 animate-slide-right">
            Environmental Protection
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-right animation-delay-200">
            Preserving ecosystems and promoting sustainable practices to safeguard our planet for future generations.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 animate-slide-left">
            Research & Innovation
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed animate-slide-left animation-delay-200">
            Driving innovative solutions through research and development to address environmental and societal challenges.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/images/2.jpeg"
            width={500}
            height={350}
            alt="Research & Innovation"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
