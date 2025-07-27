// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-black/70">
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} Datalytics-Tech. All rights reserved.</p>
    </footer>
  );
}
