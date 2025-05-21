import React, { useState } from 'react';
import { useCardContext } from '../context/CardContext';
import { ImagePlus } from 'lucide-react';

const ImageUploader: React.FC = () => {
  const { cardData, updateCardData } = useCardContext();
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateCardData({ backgroundImage: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateCardData({ backgroundImage: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      
      {cardData.backgroundImage ? (
        <div className="relative">
          <img 
            src={cardData.backgroundImage} 
            alt="Background preview" 
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity rounded-md">
            <label 
              htmlFor="image-upload" 
              className="px-4 py-2 bg-white text-gray-800 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
            >
              이미지 변경
            </label>
          </div>
        </div>
      ) : (
        <label 
          htmlFor="image-upload" 
          className="flex flex-col items-center justify-center h-40 cursor-pointer"
        >
          <ImagePlus size={48} className="text-gray-400 mb-4" />
          <span className="text-gray-500 font-medium">Drag & drop an image or click to browse</span>
          <span className="text-gray-400 text-sm mt-1">Recommended size: 1080 × 600 pixels</span>
        </label>
      )}
    </div>
  );
};

export default ImageUploader;