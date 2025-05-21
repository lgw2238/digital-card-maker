import React, { useState, useEffect } from 'react';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import { Menu } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowForm(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {isMobile && (
        <div className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Digital Card Creator</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-screen">
        {/* Left side - Form (conditionally shown on mobile) */}
        <div className={`${isMobile && !showForm ? 'hidden' : 'block'} w-full md:w-1/2 p-4 md:p-8 overflow-y-auto bg-white md:border-r border-gray-200`}>
          <CardForm />
        </div>

        {/* Right side - Preview (conditionally shown on mobile) */}
        <div className={`${isMobile && showForm ? 'hidden' : 'block'} w-full md:w-1/2 p-4 md:p-8 bg-gray-50 overflow-y-auto flex flex-col items-center justify-center`}>
          <CardPreview />
        </div>
      </div>
    </div>
  );
};

export default Layout;