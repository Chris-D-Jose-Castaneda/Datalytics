// src/App.jsx
import React from 'react';
import NavBar from './components/Navbar.jsx';
import Hero      from './components/Hero.jsx';
import Services  from './components/Services.jsx';
import Solutions from './components/Solutions.jsx';
import Contact   from './components/Contact.jsx';
import Footer    from './components/Footer.jsx';


export default function App() {
  return (
    <div className="bg-[#111827] text-white scroll-smooth">
      <NavBar />
      <Hero />
      <Services />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}
