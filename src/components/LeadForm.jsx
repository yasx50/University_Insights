import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with backend logic
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-5">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
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
