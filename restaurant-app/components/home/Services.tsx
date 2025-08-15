import { Truck, Store, Calendar, Utensils } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Home Delivery',
    description: 'Fast and safe delivery to your doorstep within 30-45 minutes',
    features: ['Live tracking', 'Contactless delivery', 'Free above ₹500'],
  },
  {
    icon: Store,
    title: 'Takeaway',
    description: 'Order ahead and pick up at your convenience',
    features: ['Ready in 20 mins', '10% discount', 'Skip the queue'],
  },
  {
    icon: Utensils,
    title: 'Dine-In',
    description: 'Experience our warm hospitality and ambience',
    features: ['Table reservation', 'Special occasions', 'Private dining'],
  },
  {
    icon: Calendar,
    title: 'Catering',
    description: 'Perfect for events, parties, and corporate gatherings',
    features: ['Custom menus', 'Professional service', 'All occasions'],
  },
]

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate-700 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose how you want to enjoy our delicious food - we're flexible to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 border border-gray-100"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-mustard-100 rounded-lg flex items-center justify-center group-hover:bg-mustard-200 transition-colors">
                  <service.icon className="w-7 h-7 text-chocolate-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-chocolate-700 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}