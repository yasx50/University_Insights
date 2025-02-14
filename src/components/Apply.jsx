import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const MBBSApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredCountry: "",
    dateOfBirth: "",
    passportNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/applied-students/add`, formData);
      alert("Application submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting your application.");
    }
  };

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
              The total cost of studying MBBS abroad varies by country. Here's an average estimate:
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
          <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="md:col-span-2">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="country" className="block font-medium text-gray-700">
                Preferred Country
              </label>
              <select
                id="country"
                name="preferredCountry"
                value={formData.preferredCountry}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a country</option>
                <option value="Russia">Russia</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Philippines">Philippines</option>
                <option value="Georgia">Georgia</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Egypt">Egypt</option>
              </select>
            </div>

            <div>
              <label htmlFor="dob" className="block font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="passport" className="block font-medium text-gray-700">
                Passport Number
              </label>
              <input
                type="text"
                id="passport"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

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
      <Footer />
    </>
  );
};

export default MBBSApplicationPage;
