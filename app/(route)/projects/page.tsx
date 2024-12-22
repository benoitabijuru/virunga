import React from 'react'
import Image from 'next/image' // Import Image for Next.js

const Page = () => {
  return (
    <div>
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
  )
}

export default Page
