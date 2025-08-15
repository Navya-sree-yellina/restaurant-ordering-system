'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Rated 4.9 out of 5 on Yelp</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Fresh, Local
              <span className="text-emerald-600"> Ingredients</span>
              <br />
              Crafted with
              <span className="text-orange-600"> Passion</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              Experience modern American cuisine where farm-fresh ingredients meet culinary innovation. 
              From hearty breakfasts to gourmet dinners, every dish is a celebration of flavor.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>25-35 min delivery</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="text-slate-700 font-semibold">$15</span>
                <span>min order</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="btn-primary inline-flex items-center justify-center gap-2">
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/reservations" className="btn-secondary inline-flex items-center justify-center">
                Book a Table
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-slate-700">200+</p>
                <p className="text-sm text-gray-600">Menu Items</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-700">25K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-700">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="relative lg:h-[600px] grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="card h-48 bg-gradient-to-br from-orange-100 to-orange-200 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-slate-700">Breakfast</h3>
                <p className="text-sm text-slate-600">All-Day Breakfast Menu</p>
              </div>
              <div className="card h-64 bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Farm Fresh</h3>
                <p className="text-sm text-emerald-50">Salads & Bowls</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="card h-64 bg-gradient-to-br from-amber-100 to-amber-200 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Grill & BBQ</h3>
                <p className="text-sm text-amber-50">Smoked to Perfection</p>
              </div>
              <div className="card h-48 bg-gradient-to-br from-red-500 to-orange-500 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Burgers & Wings</h3>
                <p className="text-sm text-orange-50">American Classics</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-pulse-slow">
              <p className="text-xs font-semibold text-emerald-600">Locally Sourced Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}