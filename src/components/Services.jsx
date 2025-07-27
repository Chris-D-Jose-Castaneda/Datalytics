// src/components/Services.jsx
import React from 'react';
const services = [
  { img: '/Market_Analysis.png', title: 'Market Analysis', details: ['Statistical Analysis','Pattern Recognition','Predictive Modeling','Business Intelligence'] },
  { img: '/Automation.png',      title: 'Automation',      details: ['Process Automation','Data Integration','Workflow Optimization','Time Savings'] },
  { img: '/visualizations.png',  title: 'Visualization',   details: ['Interactive Dashboards','Custom Charts','Real-time Updates','Export Capabilities'] },
  { img: '/consulting.png',      title: 'Consulting',      details: ['Strategy Sessions','Custom Recommendations','Ongoing Support','Tailored Roadmaps'] },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1e293b]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Services</h2>
        <p className="mb-12 text-gray-400 max-w-2xl mx-auto">
          Comprehensive data-driven solutions tailored to your needs. Our residential real estate analytics empower home buyers with market clarity, while our expertise extends to any data-driven project you have.
          Datalytics-Tech has helped over 100 clients from Ivy League graduates to local businesses and families in their needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map(({img,title,details}) => (
            <div key={title} className="flex flex-col items-center p-8 bg-[#111827] rounded-lg shadow-lg hover:shadow-2xl transition">
              <img src={img} alt={title} className="mb-6 h-48 w-48 object-cover rounded" />
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {details.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}