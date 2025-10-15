"use client";
import React, { useState } from 'react';
import { ChevronDown, RotateCcw, DollarSign, Clock, AlertCircle, CheckCircle, Phone, HelpCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CancellationRefund() {
  const [expandedSection, setExpandedSection] = useState(null);

  const mainSections = [
    {
      id: 'changes',
      title: 'Train Changes in Your Booking',
      icon: RotateCcw,
      content: `You have up to two hours before your train departure to make changes to your reservation. This includes adding extra seats, switching seats, or requesting an upgrade. Your ticket will be re-issued if you change the date, destination, or departure time. You may also decide to cancel your reservation entirely within this timeframe. For the quickest and easiest way to make changes or cancel your booking with ReserveMyTrain.com, simply call our customer service team and we will handle everything on your behalf.`
    },
    {
      id: 'refund',
      title: 'Receipt of a Refund',
      icon: DollarSign,
      content: `You will receive a refund if your tickets are canceled, subject to the applicable CancellationsRefunds policy of the relevant train operator. Refunds are processed based on the train operator is guidelines and policies. If you are unsure whether your booking delay or cancellation qualifies for compensation, a refund, or both, please get in touch with us. Our team of experts will analyze your case and help determine your eligibility for financial compensation or reimbursement of your original ticket amount.`
    }
  ];

  const additionalSections = [
    {
      id: 'compensation',
      title: 'Compensation & Claims',
      icon: CheckCircle,
      content: `If your train is delayed or canceled, you may be entitled to compensation depending on the circumstances and the train operator&apos;s policies. ReserveMyTrain.com has a dedicated team of financial experts who will thoroughly analyze your case to determine if you qualify for compensation. We work directly with train operators to ensure you receive fair and timely compensation when eligible. The amount of compensation may vary based on the delay duration and the distance of your journey.`
    },
    {
      id: 'timeline',
      title: 'Refund Processing Timeline',
      icon: Clock,
      content: `Once we receive and verify your cancellation or refund request, we initiate the process with the relevant train operator. Refunds are typically processed within 7-14 business days from the train operator&apos;s approval. However, the exact timeline may vary depending on the train operator and your financial institution. You will receive a confirmation email with your refund status and estimated processing time. In some cases, refunds may take up to 30 days to appear in your account, especially during peak travel seasons.`
    },
    {
      id: 'howto',
      title: 'How to Request a Refund or Cancellation',
      icon: Phone,
      content: `Requesting a refund or cancellation is simple. You can contact our 24/7 customer service team by phone, email, or through your ReserveMyTrain.com account. Our representatives will guide you through the process and collect all necessary information to process your request. You will need to provide your booking reference, passenger details, and the reason for cancellation. Once submitted, our team will verify your request and immediately communicate with the train operator to process your cancellation and refund.`
    },
    {
      id: 'conditions',
      title: 'Terms & Conditions for Cancellations',
      icon: AlertCircle,
      content: `Different train operators have varying cancellation policies. Some trains offer full refunds if canceled more than 48 hours before departure, while others may charge a cancellation fee. Last-minute cancellations (within 24 hours) may be subject to higher deductions. Group bookings may have different cancellation terms. No-show passengers typically forfeit their entire ticket cost. We recommend reviewing the specific train operator is policy at the time of booking. If you have any doubts about the cancellation terms, our support team is always ready to clarify.`
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: HelpCircle,
      content: `Q: Can I cancel my booking immediately after booking? A: Yes, you can cancel anytime before your train departure, though refund amounts may vary based on the time of cancellation. Q: What if the train operator cancels my train? A: If the operator cancels, you are entitled to a full refund or rebooking on an alternative service. Q: Can I change my travel dates instead of canceling? A: Yes, you can change your date within two hours before departure, subject to availability and operator policies. Q: How will I know if my refund was approved? A: We will send you a confirmation email with all details and your refund status.`
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
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Cancellation & Refund Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understand our flexible cancellation policies and how to request refunds for your train bookings with ReserveMyTrain.com.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: October 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Policy Sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Policy Overview</h2>
          <div className="space-y-4">
            {mainSections.map((section) => {
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
        </div>

        {/* Divider */}
        <div className="my-12 border-t-2 border-slate-200"></div>

        {/* Additional Information Sections */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Additional Information</h2>
          <div className="space-y-4">
            {additionalSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <div
                  key={section.id}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-purple-600" />
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
                    <div className="px-6 py-4 bg-white border-t border-slate-200 animate-in fade-in duration-200">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            Important Information
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Always keep your booking reference and confirmation email for refund requests</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Make changes to your booking at least 2 hours before departure</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Different train operators have different cancellation policies</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Our support team can help clarify any cancellation terms</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Booking?</h2>
          <p className="mb-6 text-blue-100">
            Our dedicated support team is available 24/7 to assist you with cancellations, refunds, and any questions about your booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              <Phone className="w-5 h-5" />
              Call Us
            </Link>
            <Link href="mailto:support@ReservationKart.com" className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              <Mail className="w-5 h-5" />
              Email Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}