// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/home-page.png')" }} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Datalytics-Tech</h1>
        <p className="text-xl md:text-2xl mb-6">Real Estate & Data Solutions for 100+ Clients</p>
        <a
          href="https://forms.gle/G2PLMRPWMYh9HCT37"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-amber-500 text-[#111827] font-bold rounded-md hover:opacity-90"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}