"use client"
import Image from "next/image";

import { Calculator } from "./calculate";
import { useCalculator } from "../context/CalculatorContext";

export default function Hero() {
  const { showCalculator, setShowCalculator } = useCalculator();

  return (
    <main className="w-[1440px] mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best <span className="text-pink-600">Girlish-Website</span> I Wish
            You Would Know!
          </h2>
          <p className="text-gray-700 mb-8">
            Filled with plenty of information and tools, Girly is the platform
            where you can find every details useful to women and girls.
          </p>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors inline-block"
          >
            Calculator
          </button>
        </div>
        <div className="w-full max-w-md">
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
        <div id="calculator" className="mt-12 mb-12 max-w-3xl mx-auto">
          <Calculator />
        </div>
      )}
    </main>
  );
}
