"use client";
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function PopularRoutes() {
  const routes = [
    {
      name: 'Adirondack',
      route: 'Montreal - Westport - Saratoga Springs - Albany - New York',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Acela',
      route: 'Boston - New Haven - New York - Philadelphia - Wilmington - Washington',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cardinal',
      route: 'Vancouver, BC - Seattle - Tacoma - Portland - Salem - Eugene',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'California Zephyr',
      route: 'Chicago - Omaha - Denver - Salt Lake City - Reno - San Francisco',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Coast Starlight',
      route: 'Seattle - Portland - Sacramento - Oakland - San Jose - Los Angeles',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Empire Builder',
      route: 'Chicago - Milwaukee - Minneapolis - Spokane - Seattle - Portland',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-white">Some of the Popular Train </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              Travel Routes!
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 overflow-hidden border-2 border-white/20 hover:border-cyan-400/50"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${route.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Map pin icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-500" strokeWidth={2.5} />
                </div> 
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {route.name}
                </h3>
                <p className="text-blue-100 leading-relaxed mb-4 line-clamp-2">
                  {route.route}
                </p>
                
                {/* View details button */}
                <button className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 group-hover:text-blue-300 transition-all duration-300">
                  View Route
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${route.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300">
            Explore All Routes
          </button>
        </div>

                {/* Contact CTA Section */}
        <div className="mt-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&h=400&fit=crop"
                alt="Train journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="text-white max-w-2xl">
                <h3 className="text-4xl sm:text-5xl font-bold mb-4">
                  Your Journey, Our <span className="text-blue-400">Expertise!</span>
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Ready to embark on your next adventure? Let us handle the details while you sit back and enjoy a seamless travel experience.
                </p>
              </div>

              {/* Phone Button */}
              <div className="flex-shrink-0">
                <a
                  href="tel:+1(888) 508-7457"
                  className="group flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="whitespace-nowrap">+1(888) 508-7457</span>
                </a>
              </div>
            </div>
          </div>
         </div>

      </div>
    </div>
  );
}