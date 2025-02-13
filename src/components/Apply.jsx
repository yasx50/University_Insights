import React from "react";
import Footer from "./Footer";

const MBBSApplicationPage = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-10 px-5 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold">Apply for MBBS Abroad</h1>
        <p className="mt-4 text-lg md:text-2xl font-medium">
          Start your journey today with top universities around the world.
        </p>
      </section>

      {/* Information Section */}
      <section className="mt-10 max-w-5xl mx-auto space-y-10">
        {/* Document Requirements */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>High school diploma or equivalent</li>
            <li>Valid passport</li>
            <li>Birth certificate</li>
            <li>Medical fitness certificate</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>

        {/* Costs */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Estimated Costs</h2>
          <p className="text-gray-700">
            The total cost of studying MBBS abroad varies by country. Here's an
            average estimate:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tuition fees: $4,000 - $15,000 per year</li>
            <li>Accommodation: $2,000 - $5,000 per year</li>
            <li>Other expenses (travel, insurance, etc.): $1,000 - $3,000 per year</li>
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Minimum age: 17 years</li>
            <li>High school completion with Biology, Chemistry, and Physics</li>
            <li>Minimum marks: 50% (may vary by country)</li>
            <li>NEET qualification for Indian students</li>
          </ul>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Application Form</h2>
  <form className="grid gap-6 md:grid-cols-2">
    {/* Name Field */}
    <div className="md:col-span-2">
      <label htmlFor="name" className="block font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Email Field */}
    <div>
      <label htmlFor="email" className="block font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Phone Number Field */}
    <div>
      <label htmlFor="phone" className="block font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Preferred Country Field */}
    <div>
      <label htmlFor="country" className="block font-medium text-gray-700">
        Preferred Country
      </label>
      <select
        id="country"
        name="country"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="Russia">Russia</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Philippines">Philippines</option>
        <option value="Georgia">Georgia</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Egypt">Egypt</option>
      </select>
    </div>

    {/* Date of Birth Field */}
    <div>
      <label htmlFor="dob" className="block font-medium text-gray-700">
        Date of Birth
      </label>
      <input
        type="date"
        id="dob"
        name="dob"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Passport Number Field */}
    <div>
      <label htmlFor="passport" className="block font-medium text-gray-700">
        Passport Number
      </label>
      <input
        type="text"
        id="passport"
        name="passport"
        required
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    {/* Submit Button */}
    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>
    </div>
  </form>
</section>

    </div>
    <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <p className="text-sm">&copy; 2025 University Insights. All rights reserved.</p>
      <p className="text-sm">Contact us: yasxcode@gmail.com</p>
    </footer>
      </>
  );
};

export default MBBSApplicationPage;
