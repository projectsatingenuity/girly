"use client";

import Image from "next/image";
import Link from "next/link";
import { useCalculator } from "../context/CalculatorContext";

export default function Header() {
  const { showCalculator, setShowCalculator } = useCalculator();

  const handleCalculatorClick = () => {
    setShowCalculator(!showCalculator);
    setTimeout(() => {
      const calculatorElement = document.getElementById("calculator");
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure element exists after state update
  };

  return (
    <header className="w-[1440px] h-[132px] mx-auto px-[71px] py-9 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Girl illustration"
          width={169}
          height={82}
          className="w-full h-auto"
          priority
        />
      </div>
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-gray-900 font-bold">
          Home
        </Link>
        <Link href="/about" className="text-gray-900 font-medium">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-900 font-medium">
          Contact Us
        </Link>
        <button
          onClick={handleCalculatorClick}
          className="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition-colors"
        >
          Calculator
        </button>
      </nav>
    </header>
  );
}
