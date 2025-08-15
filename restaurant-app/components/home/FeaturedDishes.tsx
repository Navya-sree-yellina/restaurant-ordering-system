'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChefHat, Leaf, Plus } from 'lucide-react'

const categories = ['All', 'Appetizers', 'Mains', 'Vegetarian', 'Popular']

const dishes = [
  {
    id: 1,
    name: 'Classic Burger',
    subtitle: 'House Specialty',
    description: 'Angus beef patty with lettuce, tomato, and special sauce',
    price: 16.99,
    category: 'Mains',
    isVegetarian: false,
    isPopular: true,
    isChefSpecial: true,
    image: '/api/placeholder/300/200',
  },
  {
    id: 2,
    name: 'Caesar Salad',
    subtitle: 'Fresh & Crisp',
    description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing',
    price: 12.99,
    category: 'Vegetarian',
    isVegetarian: true,
    isPopular: true,
    isChefSpecial: false,
    image: '/api/placeholder/300/200',
  },
  {
    id: 3,
    name: 'BBQ Ribs',
    subtitle: 'Slow-Smoked',
    description: 'Full rack of tender ribs with house-made BBQ sauce',
    price: 28.99,
    category: 'Mains',
    isVegetarian: false,
    isPopular: true,
    isChefSpecial: true,
    image: '/api/placeholder/300/200',
  },
  {
    id: 4,
    name: 'Loaded Nachos',
    subtitle: 'Perfect Starter',
    description: 'Tortilla chips with cheese, jalapeños, and all the fixings',
    price: 14.99,
    category: 'Appetizers',
    isVegetarian: true,
    isPopular: true,
    isChefSpecial: false,
    image: '/api/placeholder/300/200',
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    subtitle: 'Ocean Fresh',
    description: 'Atlantic salmon with lemon butter and seasonal vegetables',
    price: 24.99,
    category: 'Mains',
    isVegetarian: false,
    isPopular: false,
    isChefSpecial: true,
    image: '/api/placeholder/300/200',
  },
  {
    id: 6,
    name: 'Buffalo Wings',
    subtitle: 'Crowd Favorite',
    description: 'Crispy wings tossed in buffalo sauce with ranch dip',
    price: 13.99,
    category: 'Appetizers',
    isVegetarian: false,
    isPopular: true,
    isChefSpecial: false,
    image: '/api/placeholder/300/200',
  },
]


export default function FeaturedDishes() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredDishes = dishes.filter((dish) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Popular') return dish.isPopular
    if (selectedCategory === 'Vegetarian') return dish.isVegetarian
    return dish.category === selectedCategory
  })

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Featured Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's favorite creations, made with locally-sourced ingredients and served fresh daily
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="card group">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-emerald-50 to-emerald-100 relative overflow-hidden">
                {dish.isPopular && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Popular
                  </div>
                )}
                {dish.isChefSpecial && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white p-1.5 rounded-full z-10">
                    <ChefHat className="w-3 h-3" />
                  </div>
                )}
                {dish.isVegetarian && (
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white p-1.5 rounded-full z-10">
                    <Leaf className="w-3 h-3" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-500">{dish.subtitle}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {dish.isVegetarian && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Vegetarian</span>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-emerald-600">
                    ${dish.price}
                  </span>
                </div>

                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/menu" className="btn-primary inline-flex items-center gap-2">
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}