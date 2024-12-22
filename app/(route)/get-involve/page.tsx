import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
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
                    Donate
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
            {/* Way of partnerships */}
            <div className="space-y-10 px-4 py-8 bg-gray-100">
      {/* Section 1 */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Support & Partner With Us
        </h2>
        <div className="relative w-full max-w-screen-lg">
          <Image
            src="/assets/images/2.jpeg"
            layout="responsive"
            width={500}
            height={300}
            alt="Protect Environment"
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-center">
            Partner with us
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Plant Trees and Reduce Carbon Emission
        </h2>
        <div className="relative w-full max-w-screen-lg">
          <Image
            src="/assets/images/2.jpeg"
            layout="responsive"
            width={500}
            height={300}
            alt="Protect Environment"
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-center">
            Donate Tree Plantation
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          Evangelize
        </h2>
        <div className="relative w-full max-w-screen-lg">
          <Image
            src="/assets/images/2.jpeg"
            layout="responsive"
            width={500}
            height={300}
            alt="Protect Environment"
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-center">
            Follow Us
          </p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default page