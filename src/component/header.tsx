"use client";

import Image from "next/image";
import Link from "next/link";
import { useCalculator } from "../context/CalculatorContext";
import { useState } from "react";

export default function Header() {
  const { showCalculator, setShowCalculator } = useCalculator();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCalculatorClick = () => {
    setShowCalculator(!showCalculator);
    setIsMenuOpen(false);
    setTimeout(() => {
      const calculatorElement = document.getElementById("calculator");
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="hidden md:block w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[71px] py-4 md:py-6 lg:py-9">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Girl illustration"
            width={169}
            height={82}
            className="w-32 md:w-40 lg:w-auto h-auto"
            priority
          />
        </div>
        
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-0 border-b md:border-b-0 shadow-lg md:shadow-none w-full md:w-auto`}>
          <Link href="/" className="text-gray-900 font-bold hover:text-purple-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 font-medium hover:text-purple-500 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-900 font-medium hover:text-purple-500 transition-colors">
            Contact Us
          </Link>
          <button
            onClick={handleCalculatorClick}
            className="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition-colors w-full md:w-auto"
          >
            Calculator
          </button>
        </nav>
      </div>
    </header>
  );
}
