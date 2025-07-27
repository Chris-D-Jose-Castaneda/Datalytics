import React from 'react';

const listings = [
  { title: 'Elegant 3BR in Naples, FL',    price: '$850K', img: '/images/house1.jpg' },
  { title: 'Downtown Condo - 2BR',         price: '$650K', img: '/images/house2.jpg' },
  { title: 'Beachfront Villa - 4BR',       price: '$1.2M', img: '/images/house3.jpg' },
];

export default function Listings() {
  return (
    <section id="listings" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map(({title,price,img}) => (
            <div key={title} className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-xl text-amber-500 font-bold">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}