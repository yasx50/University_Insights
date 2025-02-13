import React from 'react';

const TopCountries = () => {
  const countries = ["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"];

  return (
    <section className="bg-white py-16 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">Top Countries for MBBS</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {countries.map((country, index) => (
          <div key={index} className="bg-blue-100 text-blue-700 px-8 py-4 rounded-md shadow-md font-medium text-center">
            {country}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCountries;
