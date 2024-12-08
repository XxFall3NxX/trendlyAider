import React from 'react';

const ServicesSection = ({ content }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{content.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.services.cards.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="aspect-video mb-6 bg-gray-200 rounded-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
