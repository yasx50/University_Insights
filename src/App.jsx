import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Herosection';
import WhyStudyMBBS from './components/WhyStudyMBBS';
import TopCountries from './components/TopCountries';
import AdmissionProcess from './components/AdmssionProcess';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import Apply from './components/Apply';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 bg-gray-100 p-4 rounded-lg shadow-lg">
                University Insights 🩺
              </h1>
              <HeroSection />
              <WhyStudyMBBS />
              <TopCountries />
              <AdmissionProcess />
              <LeadForm />
              <Footer />
            </div>
          }
        />

        {/* Route for /getting-started */}
        <Route path="/getting-started" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;
