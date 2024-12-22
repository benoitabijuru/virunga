import React from 'react';
import SelectDonatedProject from './SelectDonatedProject';
import { DonationAmountForm } from './DonationAmount';
import Newsletter from './Newsletter';

const Donate = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg">
      <div className="flex-1 bg-gray-700 bg-opacity-40 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Donate</h2>
        <p className="text-white mb-4">
          When you designate your donation to a specific project, 100% of your
          donation will go directly to the field to support this species.
        </p>
        <SelectDonatedProject />
      </div>

      <div className="flex-1 bg-gray-700 bg-opacity-40 p-6 rounded-lg shadow-inner">
        <DonationAmountForm />
      </div>

      <div className="flex-1 bg-gray-700 bg-opacity-40 p-6 rounded-lg shadow-inner">
        <Newsletter />
      </div>
    </div>
  );
};

export default Donate;
