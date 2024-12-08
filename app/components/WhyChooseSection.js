import React from 'react';

const WhyChooseSection = ({ content }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{content.whyChoose.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img src={content.whyChoose.image} alt="Why Choose Us" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            {content.whyChoose.points.map((point, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-3xl">{point.icon}</span>
                <p className="text-lg">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
