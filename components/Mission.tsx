import React from 'react';

const Mission = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-700 via-green-500 to-green-300 py-20 px-6 md:px-20 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-[url('/assets/images/mission-bg.jpg')] bg-cover bg-center opacity-20 w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-700/50 to-green-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-up">
          Our Mission
        </h2>
        <p className="text-lg md:text-2xl font-medium leading-relaxed animate-fade-up animation-delay-200">
          To integrate traditional conservation and research with economic
          development and education by setting up wildlife clubs.
        </p>
      </div>

      {/* Animated Decorative Icons */}
      <div className="absolute -top-10 left-5 w-20 h-20 md:w-32 md:h-32 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 md:w-36 md:h-36 bg-green-400 rounded-full blur-2xl opacity-40 animate-spin-slow"></div>
    </div>
  );
};

export default Mission;
