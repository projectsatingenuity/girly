"use client"

import type React from "react"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

export function Calculator() {
  const [periodStart, setPeriodStart] = useState(5)
  const [periodLength, setPeriodLength] = useState(5)
  const [cycleLength, setCycleLength] = useState(5)
  const [showResults, setShowResults] = useState(false)

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value + 1)
  }

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 1) {
      setter(value - 1)
    }
  }

  const handleSeeResults = () => {
    setShowResults(true)
  }

  return (
    <div className="w-full mx-auto">
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">When did your last period start?</h3>
        <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
          <button
            onClick={() => handleDecrement(setPeriodStart, periodStart)}
            className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
          <div className="flex-1 text-center text-2xl font-medium">{periodStart}</div>
          <button
            onClick={() => handleIncrement(setPeriodStart, periodStart)}
            className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
          >
            <MinusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-medium mb-3">How many days did it last?</h3>
          <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
            <button
              onClick={() => handleDecrement(setPeriodLength, periodLength)}
              className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
            <div className="flex-1 text-center text-2xl font-medium">{periodLength}</div>
            <button
              onClick={() => handleIncrement(setPeriodLength, periodLength)}
              className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
            >
              <MinusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Average cycle length (days)</h3>
          <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
            <button
              onClick={() => handleDecrement(setCycleLength, cycleLength)}
              className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
            <div className="flex-1 text-center text-2xl font-medium">{cycleLength}</div>
            <button
              onClick={() => handleIncrement(setCycleLength, cycleLength)}
              className="px-6 py-3 text-xl font-bold hover:bg-gray-100"
            >
              <MinusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <button
          onClick={handleSeeResults}
          className="w-full bg-[#F06184] hover:bg-[#E04164] text-white font-medium py-4 rounded-full transition-colors"
        >
          See results
        </button>
      </div>

      {showResults && (
        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
          <h3 className="text-4xl font-light text-gray-300">Results ...</h3>
        </div>
      )}
    </div>
  )
}

