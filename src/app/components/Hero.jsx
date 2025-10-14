"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MessageSquare, Train } from 'lucide-react';

export default function TrainReservationBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const backgroundImages = [
    '/images/train3.jpg',
     '/images/train2.jpeg',
    '/images/train1.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Request submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/80" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Logo & Info */}
          <div className="text-white space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Train className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  RESERVMYTRAIN
                </h1>
                <p className="text-blue-200 text-sm mt-1">Your Journey, Our Priority</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Book Your Train Tickets
                <span className="block text-cyan-300">With Confidence</span>
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Experience seamless railway reservations with our modern booking platform. 
                Fast, secure, and reliable service for all your travel needs.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚡', text: 'Instant Booking' },
                { icon: '🔒', text: 'Secure Payment' },
                { icon: '📱', text: '24/7 Support' },
                { icon: '✓', text: 'Best Prices' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Slider Indicators */}
            <div className="flex space-x-2">
              {backgroundImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImage ? 'w-12 bg-cyan-400' : 'w-8 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Request A Call Back
                </h3>
                <p className="text-gray-600">We'll get back to you shortly</p>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    rows={4}
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Request</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Response within 1 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}