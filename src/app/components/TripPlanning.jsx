"use client";
import React from 'react';
import { Train, MapPin, Users, Award } from 'lucide-react';

export default function TripPlanning() {
  const features = [
    {
      title: 'Tailored Train Journeys',
      description: 'As a trusted travel company in Amherst, New York, we specialize in curating train journeys that suit your preferences. Whether it is a scenic route or a direct commute, we ensure a seamless booking experience.',
      image: '/images/tripplan1.jpg',
      icon: Train,
      position: 'left'
    },
    {
      title: 'Personalized Itineraries',
      description: 'Our team crafts personalized travel plans, integrating train schedules, accommodations, and excursions, to make your journey comfortable and memorable.',
      image: '/images/personal.png',
      icon: MapPin,
      position: 'right'
    },
    {
      title: 'Expert Guidance',
      description: 'Benefit from our decades of expertise with real-time assistance and travel tips, ensuring a smooth and stress-free experience from start to finish.',
      image: '/images/expert.png',
      icon: Users,
      position: 'left'
    },
    {
      title: 'Comfort Guaranteed',
      description: 'We pride ourselves on offering premier travel experiences, featuring the most comfortable seating options, on-board amenities, and exclusive deals tailored for our esteemed clientele.',
      image: '/images/comfort.png',
      icon: Award,
      position: 'right'
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
            <span className="text-white">Trip Planning With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              reservmytrain
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 overflow-hidden border border-white/20 hover:border-cyan-400/50"
              >
                {/* Card Content */}
                <div className={`p-8 ${feature.position === 'right' ? 'flex flex-col-reverse' : 'flex flex-col'}`}>
                  {/* Image Section */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay with icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12 shadow-2xl hover:shadow-cyan-500/50 transition-shadow duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect train adventure with personalized itineraries and expert guidance.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Plan Your Trip Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}