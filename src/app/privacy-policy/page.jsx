"use client";
import React, { useState } from 'react';
import { ChevronDown, Shield, Lock, Eye, Cookie, Users, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'collection',
      title: 'Collection of Your Personal Details',
      icon: Shield,
      content: `We collect personally identifying information from you to provide products and services, including: First and Last Name, Email address, and Telephone number. We also receive billing and credit card details when you order from us. This information is required to complete purchase orders. We will not collect any personal information until you voluntarily provide it. However, using our products or services may require providing: account creation details, contest participation information, special sales sign-ups, email communications, and payment information.`
    },
    {
      id: 'use',
      title: 'Use of Your Personal Information',
      icon: Eye,
      content: `We collect and use your personal details to operate our website and provide the services you&apos;ve requested. We may also use publicly identified information to alert you of other goods or services provided by ReserveMyTrain.com and its affiliates. Your information helps us personalize your experience and communicate important updates about your orders and services.`
    },
    {
      id: 'tracking',
      title: 'Tracking User Behavior',
      icon: AlertCircle,
      content: `We track the websites and pages that our users visit within ReserveMyTrain.com to determine which services are most popular. This data is used to offer personalized content and ads to consumers whose behavior suggests interest in specific subject fields. This helps us improve our services and provide better recommendations.`
    },
    {
      id: 'automatic',
      title: 'Automatically Collected Information',
      icon: Lock,
      content: `We automatically retrieve information about your computer hardware and software, including your IP address, browser type, domain names, access times, and reference website addresses. This information is used to operate the service, ensure service consistency, and provide general analytics about ReserveMyTrain.com website usage.`
    },
    {
      id: 'cookies',
      title: 'Use of Cookies',
      icon: Cookie,
      content: `Cookies help personalize your online experience. A cookie is a text file saved on your hard drive that cannot execute programs or send malware. Cookies are exclusive to you and can only be read by the web server that created them. Cookies save you time by remembering your preferences and login information. You can accept or deny cookies through your browser settings, though disabling them may limit some features.`
    },
    {
      id: 'children',
      title: 'Children Under 13 Years of Age',
      icon: Users,
      content: `We do not intentionally gather information from children under the age of 13. If you are under 13, you must obtain permission from your parent or guardian to use this website. We take child safety and privacy seriously.`
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your privacy is our top priority. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: October 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <p className="text-slate-700 leading-relaxed">
            By using ReserveMyTrain.com, you agree to the data policies outlined in this Privacy Policy. It&apos;s our commitment to keep your personal details safe and secure. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 text-left">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 py-4 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 animate-in fade-in duration-200">
                    <p className="text-slate-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Changes Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ReserveMyTrain.com retains the right to modify this Privacy Statement at any time. We will notify you of any major changes by sending an email to your primary email address, posting a notice on our website, and/or updating the privacy information on this page.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Your continued usage of the site and services after such changes constitutes acknowledgment of the changed Privacy Policy and your commitment to abide by it.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Have questions about our privacy practices?</p>
          <Link href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            <div className="w-5 h-5" />
            
            
            Contact Us 
          </Link>
        </div>
      </div>
    </div>
  );
}

// const Mail = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );