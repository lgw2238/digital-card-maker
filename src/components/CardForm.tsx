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
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          디지털 명함 제작기
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600">필요한 문구를 입력해서 원하는 명함을 만들어보세요.</p>
      </div>

      <div className="space-y-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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
            placeholder="이름이나 직함을 입력해주세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
          />
        </div>

        {/* 다른 입력 필드들도 같은 스타일 적용 */}
        <div>
          <label htmlFor="centerText" className="block text-sm font-medium text-gray-700 mb-1">
            가운데 문구
          </label>
          <textarea
            id="centerText"
            name="centerText"
            value={cardData.centerText}
            onChange={handleInputChange}
            placeholder="간단한 소개나 설명을 입력해주세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50 min-h-[100px]"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
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
            placeholder="연락 번호나 메일을 적어주세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
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