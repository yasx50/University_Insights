import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the base URL from the environment variable
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/v1/students/add-new-student`, formData);

      if (response.status === 201) {
        setMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', country: '' });
      } else {
        setMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setMessage('This email is already in use. Please try a different one.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-5" id="contact">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      {message && <p className="text-center mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        >
          <option value="">Select Country</option>
          <option value="Russia">Russia</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Philippines">Philippines</option>
          <option value="Georgia">Georgia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Egypt">Egypt</option>
        </select>
        <button type="submit" className="w-full bg-white text-blue-600 py-2 rounded-md font-medium">
          Submit
        </button>
      </form>
    </section>
  );
};

export default LeadForm;
