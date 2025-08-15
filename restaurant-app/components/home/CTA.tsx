import Link from 'next/link'
import { ArrowRight, Gift, Percent } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-chocolate-600 to-chocolate-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience Authentic Indian Cuisine?
            </h2>
            <p className="text-chocolate-100 mb-8 text-lg">
              Order now and get 20% off on your first order. Use code: WELCOME20
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="bg-mustard-500 text-chocolate-700 px-8 py-3 rounded-lg font-semibold hover:bg-mustard-600 transition-colors inline-flex items-center justify-center gap-2">
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/app" className="bg-white text-chocolate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Download Our App
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="card p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 text-forest-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-chocolate-700 mb-2">
                Loyalty Rewards Program
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Earn points with every order and redeem them for free dishes and exclusive discounts.
              </p>
              <Link href="/rewards" className="text-forest-600 font-semibold text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="card p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-mustard-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Percent className="w-6 h-6 text-mustard-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-chocolate-700 mb-2">
                Group Order Discounts
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Planning a party? Get up to 30% off on bulk orders for groups of 10 or more.
              </p>
              <Link href="/catering" className="text-mustard-600 font-semibold text-sm hover:underline">
                Get Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}