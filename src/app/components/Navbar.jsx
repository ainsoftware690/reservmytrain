"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <Image
                src="/images/logo1.jpeg"
                alt="ReserveMyTrain Logo"
                width={200}
                height={60}
                className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="relative px-6 py-2.5 text-blue-600 font-semibold transition-all duration-200 group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform duration-200"></span>
              <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link
              href="/about"
              className="relative px-6 py-2.5 text-gray-700 font-semibold hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 group"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="relative px-6 py-2.5 text-gray-700 font-semibold hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 group"
            >
              Contact Us
            </Link>
          </div>

          {/* Reservations CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Desktop Reservations Button */}
            <div className="hidden lg:flex flex-col items-end gap-1">

              <a
                href="tel:+1(888) 508-7457"
                className="flex items-center gap-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>+1(888) 508-7457</span>
              </a>
            </div>

            {/* Mobile Reservations Button */}
            <a
              href="tel:8448443159"
              className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-4 space-y-2 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block px-5 py-3.5 text-blue-600 font-semibold bg-white rounded-xl shadow-sm border border-blue-100 transition-all duration-200 hover:shadow-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-5 py-3.5 text-gray-700 font-semibold hover:bg-white hover:text-blue-600 rounded-xl transition-all duration-200 hover:shadow-sm"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block px-5 py-3.5 text-gray-700 font-semibold hover:bg-white hover:text-blue-600 rounded-xl transition-all duration-200 hover:shadow-sm"
          >
            Contact Us
          </Link>
          
          {/* Mobile Reservations */}
          <div className="pt-4 border-t border-gray-200 mt-4">
            
            <a
              href="tel:8448443159"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" />
              <span>(844) 844-3159</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .bg-size-200 {
          background-size: 200% auto;
        }
        .bg-pos-0 {
          background-position: 0% center;
        }
        .bg-pos-100 {
          background-position: 100% center;
        }
      `}</style>
    </nav>
  );
}