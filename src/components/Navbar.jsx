// src/components/NavBar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Home',      to: '#home' },
    { label: 'Services',  to: '#services' },
    { label: 'Packages',  to: '#solutions' },
    { label: 'Analytics Preview', to: 'https://chris-jose-castaneda.shinyapps.io/SWFL_Quant_Analysis/' },
    { label: 'Contact',   to: '#contact' }
  ];

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-2xl font-bold">Datalytics-Tech</a>
        <div className="hidden md:flex space-x-6 items-center">
          {links.map(({label,to}) => (
            <a
              key={label}
              href={to}
              target={to.startsWith('http') ? '_blank' : ''}
              rel={to.startsWith('http') ? 'noopener noreferrer' : ''}
              className="hover:text-amber-500"
            >
              {label}
            </a>
          ))}
          <a
            href="https://forms.gle/G2PLMRPWMYh9HCT37"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-amber-500 text-[#111827] font-semibold rounded hover:opacity-90"
          >
            Get Started
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black">
          {links.map(({label,to}) => (
            <a
              key={label}
              href={to}
              target={to.startsWith('http') ? '_blank' : ''}
              rel={to.startsWith('http') ? 'noopener noreferrer' : ''}
              className="block p-4 border-b border-gray-700"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://forms.gle/G2PLMRPWMYh9HCT37"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border-b border-gray-700 text-amber-500 font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
