'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-white flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Premium Concrete Coating Solutions for Tampa Bay</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Service 1: Epoxy Garage Floors */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Epoxy Garage Floors</h2>
            <p className="text-xl text-orange-500 font-semibold mb-6 pb-4 border-b-2 border-orange-500">
              Durable coating of epoxy resin and hardener applied to concrete. Glossy, seamless, resists chemicals, oil, tire marks. Lasts 10–20 years.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Epoxy Flooring?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Epoxy flooring is a high-performance surface coating consisting of epoxy resin mixed with a hardening agent. When applied to concrete surfaces, it creates a strong, durable bond that transforms ordinary concrete into a beautiful, long-lasting floor.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Exceptional Durability:</strong> Withstands heavy traffic, impacts, and daily wear</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Chemical Resistance:</strong> Resists oil, gasoline, chemicals, and automotive fluids</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Easy Maintenance:</strong> Simple to clean with just soap and water</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Attractive Finish:</strong> Available in multiple colors and patterns</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Long Lifespan:</strong> Typically lasts 10-20 years with proper care</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Increased Property Value:</strong> Enhances the appearance and functionality of your space</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal Applications:</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Residential garages</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Workshops and hobby rooms</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Basements</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Commercial warehouses</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Showrooms</span>
              </li>
            </ul>

            <Link href="/contact" className="inline-block bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded transition">
              Get a Free Quote
            </Link>
          </div>

          {/* Service 2: Metallic Resin Floors */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Metallic Resin Floors</h2>
            <p className="text-xl text-orange-500 font-semibold mb-6 pb-4 border-b-2 border-orange-500">
              Epoxy with metallic pigments for a 3D, marble-like, shimmering effect. Durable, stain-resistant, luxurious look. Lasts 15+ years.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are Metallic Resin Floors?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Metallic epoxy flooring combines premium epoxy resin with specialized metallic pigments to create stunning, one-of-a-kind floors. The result is a mesmerizing three-dimensional appearance with a marble-like, pearlescent finish that catches and reflects light beautifully.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Unique Aesthetic:</strong> Each floor is completely unique with stunning visual depth</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>3D Effect:</strong> Creates the appearance of flowing lava, ocean waves, or liquid metal</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>High Durability:</strong> Extremely tough and long-lasting (15+ years)</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Stain Resistant:</strong> Non-porous surface resists stains and spills</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Luxurious Appeal:</strong> Adds a high-end, designer look to any space</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Custom Colors:</strong> Available in endless metallic color combinations</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Easy to Clean:</strong> Smooth, seamless surface is simple to maintain</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal Applications:</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>High-end residential spaces</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Luxury garages and man caves</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Retail stores and boutiques</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Restaurants and bars</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Showrooms</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Art galleries and studios</span>
              </li>
            </ul>

            <Link href="/contact" className="inline-block bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded transition">
              Get a Free Quote
            </Link>
          </div>

          {/* Service 3: Concrete Polishing */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Concrete Polishing</h2>
            <p className="text-xl text-orange-500 font-semibold mb-6 pb-4 border-b-2 border-orange-500">
              Grinding concrete with diamond abrasives to a smooth, glossy finish. Densifier hardens surface; sealant protects against stains/moisture. Exposes natural aggregate.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Concrete Polishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Concrete polishing is a multi-step process that uses progressively finer diamond abrasives to grind and polish the concrete surface to a smooth, glossy finish. A chemical densifier is applied to harden and strengthen the surface, followed by a protective sealant that guards against stains and moisture while enhancing the shine.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Natural Beauty:</strong> Exposes the unique character of the concrete and aggregate</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Extremely Durable:</strong> Creates a hard, dense surface resistant to wear</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Low Maintenance:</strong> No waxing or stripping required</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Cost-Effective:</strong> Lower lifecycle costs than most flooring options</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Eco-Friendly:</strong> No harsh chemicals or coatings needed</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Improved Lighting:</strong> Reflective surface improves light reflectivity by up to 100%</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Stain Resistant:</strong> Sealed surface resists oil, water, and other contaminants</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>LEED Certified:</strong> Contributes to sustainable building certifications</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal Applications:</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Retail stores</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Warehouses and distribution centers</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Commercial office buildings</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Restaurants</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Schools and universities</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Healthcare facilities</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-orange-500">•</span>
                <span>Residential basements and living spaces</span>
              </li>
            </ul>

            <Link href="/contact" className="inline-block bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded transition">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 1, title: 'Consultation', desc: 'We discuss your needs, preferences, and budget to recommend the best solution.' },
              { number: 2, title: 'Surface Preparation', desc: 'We properly prepare the concrete surface for optimal adhesion and longevity.' },
              { number: 3, title: 'Application', desc: 'Our skilled technicians apply your chosen coating system with precision and care.' },
              { number: 4, title: 'Final Inspection', desc: 'We ensure everything meets our high standards and your complete satisfaction.' }
            ].map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl text-gray-300 mb-8">Contact us today for a free consultation and quote</p>
        <a 
          href="tel:(727) 743-7242" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded inline-block transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 max-w-max mx-auto"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.986 4.578 1.77 1.771 3.313 2.568 4.578 2.986l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.157a1 1 0 01-.986-.836l-.024-.12c-.717-4.29-2.608-8.04-5.667-11.097-3.057-3.058-6.806-4.95-11.097-5.667l-.12-.024A1 1 0 012 3z" />
          </svg>
          (727) 743-7242
        </a>
      </section>

      <Footer />
    </div>
  )
}
