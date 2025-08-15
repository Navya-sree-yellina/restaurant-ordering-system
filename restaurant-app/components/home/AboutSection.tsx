export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg"></div>
                <div className="h-32 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg"></div>
                <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-emerald-600 font-semibold mb-2">Our Story</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Where Fresh Meets Flavor
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Founded in 2014, Savory has been a cornerstone of modern American dining in New York. 
              Our journey began with a simple vision: to elevate classic American cuisine using fresh, 
              locally-sourced ingredients and innovative cooking techniques.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Every dish on our menu is crafted with passion - from hearty breakfast classics to gourmet dinners, 
              from farm-fresh salads to perfectly grilled steaks. Our chefs, trained at top culinary schools, 
              work directly with local farmers and suppliers to ensure the freshest ingredients 
              make it to your plate.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div>
                <p className="text-2xl font-bold text-emerald-600">100%</p>
                <p className="text-sm text-gray-600">Fresh Daily</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">20+</p>
                <p className="text-sm text-gray-600">Expert Staff</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">7</p>
                <p className="text-sm text-gray-600">Days a Week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">4.9★</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="btn-primary">Learn More</button>
              <button className="px-6 py-3 border-2 border-chocolate-500 text-chocolate-600 rounded-lg font-semibold hover:bg-chocolate-50 transition-colors">
                Meet Our Chefs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}