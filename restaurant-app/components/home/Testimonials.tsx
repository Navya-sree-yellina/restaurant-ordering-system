'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Blogger',
    content: 'The most authentic Indian food I\'ve had outside of India! The spice levels are perfect and the flavors are incredibly rich.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'Been ordering from Spice Garden for 2 years now. Consistent quality, great portions, and their butter chicken is to die for!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Corporate Client',
    content: 'We regularly order catering for our office events. Professional service, timely delivery, and everyone loves the food!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-chocolate-50 to-warm-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate-700 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-mustard-200" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-mustard-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-chocolate-700">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-white rounded-lg shadow-md">
            <div>
              <p className="text-3xl font-bold text-chocolate-700">4.8/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-chocolate-700">10K+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-chocolate-700">50K+</p>
              <p className="text-sm text-gray-600">Orders Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}