"use client";
import React from 'react';
import { AlertTriangle, Shield, Info, FileText, Calendar, DollarSign, Globe, ChevronRight } from 'lucide-react';

export default function Disclaimer() {
  const sections = [
    {
      icon: <Info className="w-6 h-6" />,
      title: "Information Accuracy",
      content: "The information provided and published on reservmytrain.com is fair and accurate to the best of our knowledge but is subject to changes as the circumstances prevail. All the information provided here is variable and is modified from time to time. We keep on updating the information related to prices, content and data along with other necessary details."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Updates & Modifications",
      content: "We make sure to provide you with the relevant data and disclose all the necessary details needed for our client satisfaction. However, the travel industry is dynamic in nature and demands information updates frequently, so, the fare changes are all subject to the need of an hour. We do not stand liable for any information that is provided here as we may update the information without prior intimation."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Liability Disclaimer",
      content: "reservmytrain.com does not stand liable for any losses, damage or injury due to the information (related to content, data, or other necessary details) provided on our website or associated with its affiliates according to our Terms and Conditions. Customer discretion is advised on the use of our website."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Pricing & Offers",
      content: "Any offers or deals provided on our website are variable in nature and may change as per the needs of the travel industry. The changes can take place due to the market determinants which govern our website and include date of travel, date of booking, blackout dates and other Terms and Conditions. The fare changes can take place without prior notice."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Booking & Cancellation",
      content: "All bookings are subject to availability and confirmation. Cancellation and refund policies vary depending on the service provider and booking terms. Customers are advised to carefully review all booking details before confirming their reservations."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Third-Party Services",
      content: "Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Users access third-party sites at their own risk and should review their terms and conditions."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "User Responsibility",
      content: "Customers are requested to check and verify all information prior to using our website and making any bookings. It is the user's responsibility to ensure that all travel documents, visas, and requirements are in order before travel. We recommend contacting relevant authorities for the most current information."
    }
  ];

  const importantPoints = [
    "Prices and availability are subject to change without notice",
    "All bookings are subject to terms and conditions of service providers",
    "Travel insurance is highly recommended for all bookings",
    "Customers must verify all details before confirming bookings",
    "Refund and cancellation policies vary by service provider",
    "Check visa and travel requirements independently"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Disclaimer
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Important information about our services and your responsibilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-16">
        
        {/* Alert Box */}
        <div className="mb-12 mt-18 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-8">Please Read Carefully</h3>
              <p className="text-amber-800 leading-relaxed">
                By accessing and using reservmytrain.com, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Sections */}
        <div className="grid gap-8 mb-12">
          {sections.map((section, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Points Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Important Points List */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                <Info className="w-6 h-6 text-blue-900" />
              </div>
              Important Points
            </h3>
            <ul className="space-y-4">
              {importantPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Need Clarification?</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              If you have any questions or concerns regarding this disclaimer, please don&apos;t hesitate to contact our support team. We&apos;re here to help you understand our policies and ensure a smooth booking experience.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:info@reservmytrain.com"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email Support</p>
                  <p className="text-sm text-slate-600">support@ReservationKart.com</p>
                </div>
              </a>
              
              <a 
                href="tel:8448443159"
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone Support</p>
                  <p className="text-sm text-slate-600">+1(888) 508-7457</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="bg-slate-100 rounded-2xl p-6 text-center">
          <p className="text-slate-600">
            <span className="font-semibold">Last Updated:</span> October 15, 2025
          </p>
          <p className="text-sm text-slate-500 mt-2">
            We reserve the right to update this disclaimer at any time without prior notice
          </p>
        </div>
      </div>
    </div>
  );
}