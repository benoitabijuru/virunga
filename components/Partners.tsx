import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <div className="h-[300px] my-10 relative bg-gradient-to-r from-green-50 via-green-100 to-green-50 text-white p-10 rounded-lg shadow-lg overflow-hidden">
      <p className="text-center text-xl font-extrabold text-black mb-5">
        Our <span className="">Partners</span>
      </p>
      <div className="logos">
        <div className="logos-slide">
          {[
            '/assets/images/logo/rdb.png',
            '/assets/images/logo/rgb_logo.jpg',
            '/assets/images/logo/sida.png',
            '/assets/images/logo/undp.jpg',
            '/assets/images/logo/wcl.jpg',
          ].map((src, index) => (
            <div
              key={index}
              className="rounded-md flex-shrink-0 logo-item"
              style={{ animationDelay: `${index * 5}s` }} // Stagger the delay
            >
              <Image
                src={src}
                width={1000}
                height={500}
                alt="Partner Logo"
                className="h-auto w-48"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
