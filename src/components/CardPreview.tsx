import React, { useRef } from 'react';
import { useCardContext } from '../context/CardContext';
import { QrCode } from 'lucide-react';

const CardPreview: React.FC = () => {
  const { cardData } = useCardContext();
  const cardRef = useRef<HTMLDivElement>(null);

  const cardStyle = {
    fontFamily: cardData.fontFamily,
    backgroundImage: cardData.backgroundImage ? `url(${cardData.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // TODO : 기본 배경화면 이미지 - 이미지 없는 경우 background 컬러 변경도 추후 적용
  const needsDarkText = !cardData.backgroundImage || cardData.backgroundImage.includes('light');

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">명함 미리보기</h2>
        <p className="text-gray-600">생성될 명함을 미리 확인해보세요!</p>
      </div>
      
      <div 
        ref={cardRef}
        id="card-preview"
        className="w-full aspect-[1.8/1] rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02] mb-6"
        style={cardStyle}
      >
        <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-black/20 to-black/40">
          {/* Top section with title */}
          <div className="text-center">
            <h2 className={`text-2xl font-bold mb-1 ${needsDarkText ? 'text-gray-800' : 'text-white'}`}>
              {cardData.title || 'TITLE'}
            </h2>
          </div>
          
          {/* Center text */}
          <div className="text-center my-auto">
            <p className={`text-lg ${needsDarkText ? 'text-gray-700' : 'text-white'}`}>
              {cardData.centerText || 'Job / Slogan'}
            </p>
          </div>
          
          {/* Bottom section with contact info */}
          <div className="flex flex-col items-center">
            <div className={`text-sm ${needsDarkText ? 'text-gray-600' : 'text-white/90'} text-center mb-1`}>
              {cardData.address || 'Your Business Address'}
            </div>
            <div className={`text-sm ${needsDarkText ? 'text-gray-600' : 'text-white/90'} text-center`}>
              {cardData.phone || 'Your Contact Number'}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
          <QrCode size={20} className="text-gray-700" />
          <span className="text-sm text-gray-700">QR code will be generated when published</span>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;