import Navbar from './components/Navbar';
import content from './data/content.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* Why Choose Us Section */}
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{content.pricing.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pricing.plans.map((plan, index) => (
              <div key={index} className="border rounded-xl p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
