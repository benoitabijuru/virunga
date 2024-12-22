import Image from 'next/image';
import React from 'react';

const VHeart = () => {
  return (
    <div className="px-5 md:px-20 py-10 bg-gradient-to-b from-white to-green-100 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-8 animate-fade-in">
        At the Heart of Virunga Wildlife Club
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        <div className="group">
          <Image
            src="/assets/images/gollila.jpg"
            width={250}
            height={250}
            alt="Climate Change and Energy"
            className="cursor-pointer rounded-lg transform transition-transform duration-500 group-hover:scale-105 shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-all duration-300">
            Climate Change and Energy
          </p>
        </div>
        <div className="group">
          <Image
            src="/assets/images/Tree.JPG"
            width={250}
            height={250}
            alt="Environmental Protection"
            className="cursor-pointer rounded-lg transform transition-transform duration-500 group-hover:scale-105 shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-all duration-300">
            Environmental Protection
          </p>
        </div>
        <div className="group">
          <Image
            src="/assets/images/2.jpeg"
            width={250}
            height={250}
            alt="Research & Innovation"
            className="cursor-pointer rounded-lg transform transition-transform duration-500 group-hover:scale-105 shadow-lg"
          />
          <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-all duration-300">
            Research & Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default VHeart;
