"use client";
import React from 'react';
import { Train, Users, Globe, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Expert Travel Planning",
      description: "Customized train itineraries tailored to your preferences and budget"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Travel professionals working around the clock for your comfort"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "USA, Canada & Worldwide train travel experiences"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Quality Service",
      description: "Mesmerizing experiences with economical fares"
    }
  ];

  const services = [
    "Business Class & Private Coach Roomette travel",
    "Bedroom Suite & Auto Train bookings",
    "Alaska Rail Road & Amtrak reservations",
    "SunRail, Metro & Euro Rail arrangements",
    "Customized train itineraries",
    "Train ticket reservation & date changes",
    "Hassle-free booking process"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              We are a <span className="font-semibold text-blue-900">reputed and esteemed Travel Company</span> based in Hagerstown Maryland USA for providing comfortable train & travel experiences all around the USA, Canada & Worldwide. We are rail vacation planner with affiliated partnership with multiple train consolidators.
            </p>
            
            <p className="text-lg">
              We are a third party so we do not own or operate any of the trains or rail stations but we are known to provide <span className="font-semibold text-blue-900">top quality agency services</span> to our customers so that they can have a comfortable train travel experience. We have given customers mesmerizing experiences in their train travel plans.
            </p>
            
            <p className="text-lg">
              It can be a romantic weekend, a guided city escape, or a once-in-a-lifetime holiday, we tailor-made train itineraries for everyone. We have a team of experienced travel professionals working around the clock to provide you with <span className="font-semibold text-blue-900">economical fares & customized train itineraries</span> as per your timing & budget preference.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100 group hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* What We Offer Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
          <p className="text-blue-100 text-center mb-8 max-w-3xl mx-auto text-lg">
            We offer exciting offers for your train travels. Be it Business Class travel, Private Coach Roomette, Bedroom Suite, Auto Train & others, we don't disappoint.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-700/40 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-50">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Exploring hustling cities to green national parks, scenic farmlands, forests, luxurious Rocky Mountains, beaches & thrilling Glaciers, was never this easy but with our experts we surely ensure the <span className="font-semibold text-blue-900">smoothest of trips with bucket loads of wow experience</span>.
            </p>
            
            <p className="text-lg">
              We also customize your train itineraries as per your request. We ensure smooth & a hassle free booking process. Our team specializes in planning your train Journeys on <span className="font-semibold text-blue-900">Alaska Rail Road, Amtrak, SunRail, Metro, Euro Rail & so on</span>.
            </p>
            
            <p className="text-lg">
              As a train travel planner, our services include customizing train itineraries as per your preference, train ticket reservation, date change & modifications. We're here to make your rail journey unforgettable!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}