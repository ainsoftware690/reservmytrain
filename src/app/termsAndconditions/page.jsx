"use client";
import React, { useState } from 'react';
import { ChevronDown, FileText, AlertCircle, Lock, Briefcase, CreditCard, User, Plane, Ban, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsConditions() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement & Acceptance',
      icon: FileText,
      content: `By accessing and using ReserveMyTrain.com, you agree to comply with these Terms and Conditions. These terms apply to all travel-related activities conducted on the website and are in accordance with regulatory requirements. The website is offered solely to assist you in collecting travel information, evaluating travel availability, relevant products and services, making legal reservations, and transacting business with travel suppliers. You must accept these terms carefully before using the website.`
    },
    {
      id: 'eligibility',
      title: 'Eligibility Requirements',
      icon: User,
      content: `This website is offered to people who are at least 18 years old and live in the United States, any of its territories or possessions, or Canada. By accessing this website, you confirm and warrant that you meet all eligibility criteria mentioned above. You must not enter or use the website if you do not follow these conditions. You represent that you have the legal authority to establish a legally binding obligation and have provided factual, correct, and complete information on the website.`
    },
    {
      id: 'modifications',
      title: 'Changes to Terms of Use',
      icon: AlertCircle,
      content: `ReserveMyTrain.com may amend and change these Terms of Service from time to time at our absolute discretion. Updates take effect immediately upon publication and apply to all subsequent use of the website. By continuing to use the website after new Terms of Use are posted, you endorse and adhere to the modifications. You must review this page each time you visit the website to ensure you are aware of updates, as they are binding on you.`
    },
    {
      id: 'account',
      title: 'Accessing the Website & Account Security',
      icon: Lock,
      content: `You are accountable for making appropriate provisions to access the website and ensuring that all individuals accessing the website through your internet connection comply with these Terms of Use. You must keep your username, password, and security details private and not reveal them to any other individual or organization. Your account is personal to you, and you consent not to grant someone else access to the website using your credentials. You must contact us immediately if there is any unauthorized access to or use of your username, password, or security details.`
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property Rights',
      icon: Briefcase,
      content: `ReserveMyTrain.com, its licensors, and suppliers own the website and its entire contents, features, and materials (including all data, software, text, screens, photos, video, and audio, as well as the design, selection, and arrangement thereof). These materials are protected by U.S. and international copyright, trademark, patent, trade secret, and other intellectual property rights. These Terms of Service allow you to use the website for personal, non-commercial purposes only. You may not copy, distribute, alter, create derivative works, publicly display, republish, or transfer any content without permission. You can print a fair number of pages for personal use only. You are not allowed to remove or change any patent, trademark, or intellectual property notices from copies of the website&apos;s content.`
    },
    {
      id: 'prohibited',
      title: 'Prohibited Uses',
      icon: Ban,
      content: `You agree to use the website only for lawful purposes and in compliance with these Terms and Conditions. You must not use the website in any way that violates federal, state, territorial, or international law. You promise not to: abuse, injure, or threaten minors; upload any material that doesn&apos;t conform with content standards; deliver commercial or promotional content like spam; impersonate the Company or any other individual; use any robot, spider, or automated means to access the website; introduce malicious viruses or dangerous content; attempt unauthorized access to the website or its servers; or use denial-of-service attacks. Any violation will result in immediate termination of your access rights.`
    },
    {
      id: 'trademarks',
      title: 'Trademarks',
      icon: FileText,
      content: `The ReserveMyTrain.com name, logo, and associated titles, badges, product and service names, styles, and slogans are all trademarks of ReserveMyTrain.com, its affiliates, licensors, or other third parties. You may not use these marks without ReserveMyTrain.comes prior written approval. Any brands, logos, product and service names on this website are the property of their respective owners and are protected by trademark law.`
    },
    {
      id: 'airline',
      title: 'Airline Restrictions & Policies',
      icon: Plane,
      content: `Airline tickets purchased via ReserveMyTrain.com are subject to the written conditions of carriage and regulations of the relevant airline, including cancellation policies and terms of use. Airlines reserve the right to amend flight times, schedules, and cancel flights at their discretion. Schedule adjustments may result in itineraries that don ot align with your preferences. ReserveMyTrain.com makes every effort to publish correct pricing and information; however, if a service is listed at an incorrect price due to a typographical error, ReserveMyTrain.com and/or the airline reserve the right to reject orders prior to charging your payment method.`
    },
    {
      id: 'taxes',
      title: 'Tax & Fee Charges',
      icon: CreditCard,
      content: `Government taxes, fees, and airline charges are either included in your fare or itemized on your checkout page. Tax rates in effect at the time you purchase your ticket are added to your ticket cost. The traveler may be liable for retroactive tax rate changes. Exit and entrance fees not included in your travel expense may be charged for international flights. On published-price airline itineraries with multiple carriers, a non-refundable charge may be applied per ticket.`
    },
    {
      id: 'changes',
      title: 'Changes to Itinerary',
      icon: AlertCircle,
      content: `If itinerary changes are allowed by airline fare rules, the relevant airline may charge a change fee per ticket. These fees typically range between $75.00 and $300.00 USD but may vary by airline and fare type. Some changes may be unavailable or cost more than stated amounts. Change fees are in addition to any ticket rate differences. Modifications to your itinerary made by ReserveMyTrain.com may result in additional processing fees.`
    },
    {
      id: 'cancellation',
      title: 'Cancellation & Refund Policy',
      icon: CreditCard,
      content: `Tickets purchased are non-refundable within 24 hours. Cancellations made after 24 hours are subject to airline policies and cancellation charges. Tickets can be canceled for a fee within 24 hours by contacting our 24/7 service. In case of a no-show, the ticket is non-refundable. Low-cost airline tickets booked within 7 days (168 hours) of departure are non-refundable. Hotel and rental car reservation fees are non-refundable in all circumstances. Refund requests must be made over the phone and must comply with airline/supplier rules. It may take 60-90 days from submission to receive credit on your statement. ReserveMyTrain.com will charge a post-ticketing operation fee as necessary.`
    },
    {
      id: 'thirdparty',
      title: 'Third Party Bookings',
      icon: User,
      content: `If you are using ReserveMyTrain.com to make requests for or on behalf of third parties, such as family members or traveling companions, you are responsible for the accuracy of all information provided, including the credit card holder is billing address and telephone number. This information must correspond with what&apos;s on file with their financial institution. You must remind third parties of all applicable terms and conditions, including these Terms of Use, and any relevant laws and limitations.`
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Please read and understand our terms and conditions before using ReserveMyTrain.com services.
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
            ReserveMyTrain.com&apos;s primary purpose is to serve and assist travelers all over the world in preparing their travel itineraries. By using the website for your travel requirements, you commit to the terms and conditions outlined below. These terms and conditions apply to all types of travel-related activities conducted on the website and are in accordance with regulatory requirements. Please read this agreement carefully.
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

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            Important Notice
          </h2>
          <p className="text-slate-700 leading-relaxed">
            By accessing and using ReserveMyTrain.com, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety. If you do not agree with any part of these terms, please do not use the website. ReserveMyTrain.com reserves the right to terminate your access immediately if you violate any of these terms.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Have questions about our terms and conditions?</p>
          <Link href="/contact"
           className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            <div className="w-5 h-5" />
            Contact Support
            </Link>
        </div>
      </div>
    </div>
  );
}