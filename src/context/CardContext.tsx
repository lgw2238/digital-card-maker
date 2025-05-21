import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the card data interface
interface CardData {
  title: string;
  centerText: string;
  address: string;
  phone: string;
  fontFamily: string;
  backgroundImage: string | null;
}

// Define the context interface
interface CardContextType {
  cardData: CardData;
  updateCardData: (data: Partial<CardData>) => void;
  resetBackground: () => void;
}

// Create context with a default value
const CardContext = createContext<CardContextType | undefined>(undefined);

// Initial state for the card
const initialCardData: CardData = {
  title: '',
  centerText: '',
  address: '',
  phone: '',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  backgroundImage: null,
};

// Provider component
export const CardContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cardData, setCardData] = useState<CardData>(initialCardData);

  const updateCardData = (data: Partial<CardData>) => {
    setCardData(prevData => ({ ...prevData, ...data }));
  };

  const resetBackground = () => {
    setCardData(prevData => ({ ...prevData, backgroundImage: null }));
  };

  return (
    <CardContext.Provider value={{ cardData, updateCardData, resetBackground }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the context
export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardContextProvider');
  }
  return context;
};