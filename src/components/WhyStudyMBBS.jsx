import React from 'react';

const WhyStudyMBBS = () => {
  const benefits = [
    "Affordable tuition fees",
    "Globally recognized programs",
    "Multicultural environment",
    "Top-notch medical training",
  ];

  return (
    <section className="bg-gray-100 py-16 px-5" id='why-mbbs'>
      <h2 className="text-3xl font-bold text-center mb-6">Why Study MBBS Abroad?</h2>
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-lg text-gray-700">
            ✅ {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyStudyMBBS;
