import React from 'react';
import { useCardContext } from '../context/CardContext';
import ImageUploader from './ImageUploader';
import FontSelector from './FontSelector';
import CardActions from './CardActions';
import { X } from 'lucide-react';

const CardForm: React.FC = () => {
  const { cardData, updateCardData, resetBackground } = useCardContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateCardData({ [name]: value });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">디지털 명함 제작기</h2>
        <p className="text-gray-600">필요한 문구를 입력해서 원하는 명함을 만들어보세요.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            제목 / 이름
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={cardData.title}
            onChange={handleInputChange}
            placeholder="성명이나 회사이름"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="centerText" className="block text-sm font-medium text-gray-700 mb-1">
            가운데 문구
          </label>
          <textarea
            id="centerText"
            name="centerText"
            value={cardData.centerText}
            onChange={handleInputChange}
            placeholder="직무나 슬로건을 작성하세요."
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            주소
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={cardData.address}
            onChange={handleInputChange}
            placeholder="주소지, 혹은 회사명을 입력하세요."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            연락 번호
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={cardData.phone}
            onChange={handleInputChange}
            placeholder="연락 번호나 메일을 적어주세요."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            배경 이미지
          </label>
          <div className="relative">
            {cardData.backgroundImage && (
              <button 
                onClick={resetBackground}
                className="absolute right-2 top-2 bg-white p-1 rounded-full shadow-sm hover:bg-gray-100 transition-colors z-10"
                title="Remove image"
              >
                <X size={16} />
              </button>
            )}
            <ImageUploader />
          </div>
        </div>

        <FontSelector />
        
        <CardActions />
      </div>
    </div>
  );
};

export default CardForm;