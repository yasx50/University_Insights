import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Study MBBS Abroad</h3>
          <p>Helping students achieve their dreams of studying MBBS abroad with trusted guidance and top universities.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#why-study" className="hover:underline">Why Study MBBS Abroad</a></li>
            <li><a href="#countries" className="hover:underline">Top Countries</a></li>
            <li><a href="#admission" className="hover:underline">Admission Process</a></li>
            <li><a href="#lead-form" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">© 2025 Study MBBS Abroad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
