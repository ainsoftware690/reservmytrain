"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MessageSquare, Train, CheckCircle, AlertCircle } from 'lucide-react';

export default function TrainReservationBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920',
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920',
    'https://images.unsplash.com/photo-1566024287286-457247b70310?w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
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
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Section - Logo & Info */}
            <div className="text-white space-y-6 sm:space-y-8">
              {/* Logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Train className="w-8 sm:w-12 h-8 sm:h-12 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    RESERVMYTRAIN
                  </h1>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1">Your Journey, Our Priority</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Book Your Train Tickets
                  <span className="block text-cyan-300">With Confidence</span>
                </h2>
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Experience seamless railway reservations with our modern booking platform. 
                  Fast, secure, and reliable service for all your travel needs.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {[
                  { icon: '⚡', text: 'Instant Booking' },
                  { icon: '🔒', text: 'Secure Payment' },
                  { icon: '📱', text: '24/7 Support' },
                  { icon: '✓', text: 'Best Prices' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 hover:bg-white/20 transition-all">
                    <span className="text-lg sm:text-2xl flex-shrink-0">{feature.icon}</span>
                    <span className="font-medium text-xs sm:text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Slider Indicators */}
              <div className="flex space-x-2 justify-start sm:justify-start">
                {backgroundImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImage ? 'w-8 sm:w-12 bg-cyan-400' : 'w-6 sm:w-8 bg-white/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-3 sm:mb-4 bg-green-500/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 flex items-start gap-3 shadow-xl animate-in slide-in-from-top">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-white">
                    <p className="font-bold text-sm sm:text-base">Request Submitted!</p>
                    <p className="text-xs sm:text-sm text-green-50">We'll call you back within 1 hour</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-3 sm:mb-4 bg-red-500/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 flex items-start gap-3 shadow-xl">
                  <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-white">
                    <p className="font-bold text-sm sm:text-base">Oops! Something went wrong</p>
                    <p className="text-xs sm:text-sm text-red-50">Please try again</p>
                  </div>
                </div>
              )}

              <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 transform hover:scale-[1.02] transition-transform duration-300">
                {/* Form Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-2 sm:mb-3 shadow-lg">
                    <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    Request A Call Back
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">We&apos;ll get back to you shortly</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 ml-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 rounded-lg sm:rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm sm:text-base text-gray-800 placeholder-gray-400 ${
                        errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-600 ml-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 ml-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 rounded-lg sm:rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm sm:text-base text-gray-800 placeholder-gray-400 ${
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-600 ml-1">{errors.email}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 ml-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans..."
                      rows={3}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-2 rounded-lg sm:rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-sm sm:text-base text-gray-800 placeholder-gray-400 ${
                        errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-600 ml-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-2.5 sm:py-3 sm:py-3.5 rounded-lg sm:rounded-xl shadow-lg transform transition-all duration-200 flex items-center justify-center space-x-2 group text-sm sm:text-base ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Request</span>
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">Response within 1 hour</span>
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