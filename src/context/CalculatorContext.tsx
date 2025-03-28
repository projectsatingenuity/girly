"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type CalculatorContextType = {
  showCalculator: boolean;
  setShowCalculator: (show: boolean) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  showCalculator: false,
  setShowCalculator: () => {},
});

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

type CalculatorProviderProps = {
  children: ReactNode;
};

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <CalculatorContext.Provider value={{ showCalculator, setShowCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
}