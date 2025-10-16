"use client";
import React from 'react';
import { ArrowRight, Train, Globe, Award, Users } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Train, value: '500+', label: 'Train Routes' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '10K+', label: 'Happy Travelers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-850 to-indigo-900 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-transparent tet-white bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Us
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-white leading-relaxed text-justify">
                We are a reputed and esteemed Travel Company based in Hagerstown Maryland USA for providing comfortable train & travel experiences all around the USA, Canada & Worldwide. We are rail vacation planner with affiliated partnership with multiple train consolidators. We are a third party so we do not own or operate any of the trains or rail stations but we are known to provide top quality agency services to our customers so that they can have a comfortable train travel experience.
              </p>
              <p className="text-white leading-relaxed text-justify">
                We have given customers mesmerizing experiences in their train travel plans. It can be a romantic weekend, a guided city escape, or a once-in-a-lifetime holiday, we tailor-made train itineraries for everyone. We have a team of experienced travel professionals working around the clock to provide you with economical fares & customized train itineraries as per your timing & budget preference.
              </p>
            </div>

            <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Know More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Image with decorative elements */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-3xl transform -rotate-3"></div>
            
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/images/about.jpeg"
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">15+</p>
                  <p className="text-sm text-slate-600">Years Trusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl text-center"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Value */}
                <p className="text-3xl font-bold text-slate-800 mb-1 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {stat.value}
                </p>
                
                {/* Label */}
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}