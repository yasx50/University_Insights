import React from 'react';

const AdmissionProcess = () => {
  const steps = [
    "Fill out the application form",
    "Submit required documents",
    "Attend an interview (if necessary)",
    "Receive your admission letter",
    "Apply for a student visa",
  ];

  return (
    <section className="bg-gray-100 py-16 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">Admission Process & Eligibility</h2>
      <ol className="list-decimal list-inside space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="text-lg text-gray-700">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AdmissionProcess;
