import React from 'react';

const Page = () => {
  return (
    <div className="bg-gradient-to-br py-10">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-400 to-green-600 text-white">
        <h1 className="text-4xl font-extrabold mb-4">About Virunga Wildlife Clubs</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Empowering communities and fostering environmental conservation through education, research, and innovative practices.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
        <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto p-6">
          <p><strong>Address:</strong> P.O.Box 169 RUHENGERI/RWANDA</p>
          <p><strong>Phone:</strong> +250 (0) 788649253 / 788303022</p>
          <p><strong>Email:</strong> <a href="mailto:virungawildlifeclubs@yahoo.com" className="text-blue-500 underline">virungawildlifeclubs@yahoo.com</a></p>
          <p><strong>Website:</strong> <a href="http://www.virungawildlifeclubs.org" className="text-blue-500 underline">www.virungawildlifeclubs.org</a></p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-10  text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p>
              “OUR ENVIRONMENT, OUR FUTURE”
            </p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p>
              To integrate traditional conservation and research with economic development and education by setting up wildlife clubs in schools and professional institutions near Protected Areas.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Objectives</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside text-lg space-y-4">
          <li>Promote ecosystem protection and natural resource safeguarding with community involvement.</li>
          <li>Establish Nature Clubs in schools and institutions near the Virunga region Protected Areas (PAs).</li>
          <li>Promote community ecotourism activities to enhance the country’s natural resources' economic and recreational value.</li>
          <li>Encourage environmental conservation through education, awareness, and communication.</li>
          <li>Enhance scientific research on sustainable development, biodiversity, and the environment.</li>
          <li>Collaborate with organizations with similar objectives both within and outside the country.</li>
          <li>Conduct resilient activities related to Climate Change and Disaster Risk Reduction (DRR).</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="py-10 bg-gradient-to-r from-green-200 to-green-400">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="bg-red-500 text-white rounded-lg p-6 shadow-md">Add Picture</div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">2019/2021</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>92 Schools Clubs organized in 4 Districts surrounding the Volcanoes National Park.</li>
              <li>Partnerships with Rutsiro and Ngororero Districts developed for conservation in Gishwati-Mukura National Park.</li>
              <li>Partnership with FAO Mountain Partnership developed.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">2021/2022</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>1 Demonstration Tree Nursery Established.</li>
              <li>4 Youth Enterprises organized to manage nurseries.</li>
              <li>10 Schools enhanced by tree nurseries and rainwater harvesting systems.</li>
              <li>6 Interns from Universities facilitated during project implementation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Innovations & Social Enterprises</h2>
        <div className="bg-red-500 text-white rounded-lg p-6 shadow-md text-center">Add Picture</div>
        <div className="max-w-4xl mx-auto text-lg mt-6 space-y-4">
          <p><strong>Alternative Energy Promotion Centre:</strong> Focused on reducing reliance on firewood and charcoal, supporting Rwanda’s biomass energy strategy.</p>
          <p><strong>Virunga Itineris:</strong> A project to develop sustainable tourism infrastructure, enhance wildlife presence, and provide community-based tourism opportunities.</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
