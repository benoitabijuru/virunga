"use client";
import Image from "next/image";
import React from "react";

// Reusable Topic Card Component
const TopicCard = ({ src, alt, title }: { src: string; alt: string; title: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src}
        width={250}
        height={250}
        alt={alt}
        className="rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105"
        priority
      />
      <p className="mt-4 text-lg font-semibold text-gray-800 text-center">{title}</p>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-white py-16 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
              Protect Environment, Secure the Future
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Habitat restoration and protection is at the core of our mission. Join us in
              planting trees and restoring nature to secure a greener future.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transform transition-transform duration-300 hover:scale-105">
              Join Us Today
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/2.jpeg"
              width={500}
              height={500}
              alt="Protect Environment"
              className="rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 bg-green-600 text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Explore By Topics</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          <TopicCard src="/assets/images/gollila.jpg" alt="Environmental Protection" title="Environmental Protection" />
          <TopicCard src="/assets/images/2.jpeg" alt="Climate Change" title="Climate Change" />
          <TopicCard src="/assets/images/Tree.JPG" alt="Energy" title="Energy" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-20">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-700 mb-12">
          Our Projects
        </h2>

        {/* Project 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Climate Change and Energy
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Innovative energy solutions and sustainable practices to tackle climate
              change and empower communities.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/gollila.jpg"
              width={500}
              height={350}
              alt="Climate Change"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/Tree.JPG"
              width={500}
              height={350}
              alt="Environmental Protection"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Environmental Protection
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Preserving ecosystems and promoting sustainable practices to safeguard our
              planet for generations.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Research & Innovation
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Driving innovative solutions to address environmental and societal
              challenges through research.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/2.jpeg"
              width={500}
              height={350}
              alt="Research & Innovation"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
