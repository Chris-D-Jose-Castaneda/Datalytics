// src/components/Solutions.jsx
import React from 'react';
const plans = [
  { title: 'Free Consultation', price: 'Free', features: ['15-minute strategy call','Project assessment','Email support','Basic recommendations','Next steps guidance'], label: 'Start Here' },
  { title: 'Basic Package', price: '$99', features: ['Basic data analysis','Simple visualization','Excel spreadsheet model','Email support','1 revision included'] },
  { title: 'Standard Package', price: '$249', features: ['Advanced analysis','Interactive dashboard','Custom modeling','Email support','5 Appointments','5 revisions included'], label: 'Most Popular', highlight: true },
  { title: 'Premium Package', price: '$499', features: ['Complete analysis suite','Multiple dashboards','Workflow automation','Higher Level Mathematics','10 revisions included',"10 Meetings", "Email Support","Reports"] },
  { title: 'Residential Real Estate Package', price: 'Commission based ~1%', features: ['Premium Package','Complete transformation','Custom integrations','Advanced simulations','Dedicated support','Unlimited revisions'], label: 'Best Value' }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-[#111827]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Select a Package</h2>
        <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
          All packages include a professional consultation and can be customized to your specific requirements. Need a custom package? Book a FREE consultation!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map(plan => (
            <div key={plan.title} className={`relative flex flex-col p-6 bg-[#1e293b] rounded-lg shadow-lg ${plan.highlight ? 'border-2 border-amber-500' : ''}`}>
              {plan.label && (
                <span className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full ${plan.highlight ? 'bg-amber-500 text-[#111827]' : 'bg-gray-600 text-gray-200'}`}>{plan.label}</span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-3xl font-extrabold mb-4 text-amber-500">{plan.price}</p>
              <ul className="mb-6 list-disc list-inside text-gray-300">{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
              <button className="mt-auto px-4 py-2 bg-amber-500 text-[#111827] font-semibold rounded hover:opacity-90">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
