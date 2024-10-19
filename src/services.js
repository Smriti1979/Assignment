import React from 'react';
import './App.css';

const services = [
  {
    title: "Emergency Plumbing Services",
    description: "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
    icon: "🚨", 
  },
  {
    title: "Plumbing and Drains",
    description: "As the largest plumbing and drain service company, we make thousands of repairs every day.",
    icon: "🔧", 
  },
  {
    title: "Water Damage",
    description: "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
    icon: "💧", 
  },
  {
    title: "Water Heaters",
    description: "Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.",
    icon: "🔥", 
  },
];

const Services = () => {
  return (
    <div id="assignment" className="relative h-screen flex justify-center items-center px-6">
     
      <div className="absolute inset-0 bg-gradient clip-background"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white text-black rounded-lg p-6 shadow-md flex flex-col justify-center items-center hover:rotate-box transform transition-transform duration-700 ease-in-out"
            >
              
              <div className="flex justify-center items-center bg-gray-200 border-4 border-customPurple rounded-full w-24 h-24 mb-4">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-center text-gray-600 mb-4">{service.description}</p>
              <div className="text-center">
                <a href="#" className="text-customPurple-700 font-semibold">EXPLORE THIS SERVICE &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
