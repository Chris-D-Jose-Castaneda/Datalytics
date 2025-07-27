// src/components/Contact.jsx
import React from 'react';
import { FaClock, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1e293b]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Embedded Form */}
        <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Complete the Form</h2>
          <p className="mb-6 text-gray-400">Fill out the form below and we’ll get back to you within 24 hours with a detailed proposal.</p>
          <iframe
            src="https://forms.gle/G2PLMRPWMYh9HCT37?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded"
            title="Project Form"
          />
        </div>

        {/* Business Hours & Location */}
        <div className="space-y-8">
          <div className="bg-[#111827] p-6 rounded-lg shadow-lg flex items-center">
            <FaClock size={24} className="text-amber-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Business Hours</h3>
              <p className="text-gray-300">Mon – Fri, 9:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="bg-[#111827] p-6 rounded-lg shadow-lg flex items-center">
            <FaMapMarkerAlt size={24} className="text-amber-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Physical Location</h3>
              <p className="text-gray-300">Naples, FL</p>
            </div>
          </div>
          <div className="bg-[#111827] p-6 rounded-lg shadow-lg flex items-center">
            <FaGlobe size={24} className="text-amber-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Remote</h3>
              <p className="text-gray-300">Available Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
