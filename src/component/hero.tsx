"use client"
import Image from "next/image";

import { Calculator } from "./calculate";
import { useCalculator } from "../context/CalculatorContext";

export default function Hero() {
  const { showCalculator, setShowCalculator } = useCalculator();

  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="w-full md:max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Best <span className="text-pink-600">Girlish-Website</span> I Wish
            You Would Know!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Filled with plenty of information and tools, Girly is the platform
            where you can find every details useful to women and girls.
          </p>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="w-full sm:w-auto bg-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors inline-block"
          >
            Calculator
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto lg:max-w-md mt-8 md:mt-0">
          <Image
            src="/girl.png"
            alt="Girl illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {showCalculator && (
        <div id="calculator" className="mt-8 sm:mt-12 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
          <Calculator />
        </div>
      )}
    </main>
  );
}
