import React from 'react';

const HeroSection = ({ content }) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{content.hero.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{content.hero.subtitle}</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          {content.hero.buttonText}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.hero.images.map((image, index) => (
          <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img src={image} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
