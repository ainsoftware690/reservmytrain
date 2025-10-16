"use client";
import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ModernFooter() {
  const quickLinks = [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/termsAndconditions' },
    { name: 'Cancellation & Refund Policy', href: '/cancellationAndrefundPolicy' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info Section - Wider */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo1.jpeg"
                alt="MapMyTrain Logo"
                width={180}
                height={90}
                className="h-auto w-auto max-h-20 object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-lighten"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </Link>
            
            <p className="text-blue-200 text-base leading-relaxed max-w-md">
              We are a reputed and esteemed Travel Company based in Hagerstown Maryland USA for providing comfortable train & travel experiences all around the USA, Canada & Worldwide.
            </p>

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
              <span className="text-white font-semibold text-sm tracking-wide">BEST PRICE GUARANTEE</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="group flex items-center space-x-2 text-blue-200 hover:text-cyan-400 transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:8448443159"
                className="flex items-center space-x-3 text-blue-200 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-800/60 rounded-lg flex items-center justify-center group-hover:bg-blue-700/60 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">+1(888) 508-7457</span>
              </a>
              
              <a 
                href="mailto:support@ReservationKart.com"
                className="flex items-center space-x-3 text-blue-200 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-800/60 rounded-lg flex items-center justify-center group-hover:bg-blue-700/60 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium"> support@ReservationKart.com</span>
              </a>
              
              <div className="flex items-start space-x-3 text-blue-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-800/60 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white mb-1">RESERVEMYTRAIN</p>
                  <p className="leading-relaxed"> 30 Summer St Hagerstown <br />Maryland 21740<br />United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
            <p>© 2025 ReserveMyTrain. All Rights Reserved.</p>
            <p className="flex items-center gap-2">
              Crafted with <span className="text-cyan-400">❤</span> for travelers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}