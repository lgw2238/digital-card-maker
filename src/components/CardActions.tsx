import React, { useState } from 'react';
import { useCardContext } from '../context/CardContext';
import { toPng } from 'html-to-image';
import QRCode from 'qrcode.react';
import { Download, Share2, QrCode, Loader2 } from 'lucide-react';

const CardActions: React.FC = () => {
  const { cardData } = useCardContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [cardUrl, setCardUrl] = useState('');

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const cardElement = document.getElementById('card-preview');
      if (!cardElement) {
        throw new Error('Card preview element not found');
      }

      // Generate the image
      const dataUrl = await toPng(cardElement, { quality: 0.95 });
    
      setCardUrl(dataUrl);
      
      // Download the image
      const link = document.createElement('a');
      link.download = `${cardData.title || 'business-card'}.png`;
      link.href = dataUrl;
      link.click();
      
      // Show QR code modal
      setShowQRModal(true);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareToKakao = () => {
    // 실제 카카오톡 공유하기 sdk 연결 --
    alert('해당 기능은 아직 구현중에 있습니다. 잠시만 기다려주세요.');
  };

  // QR 코드 생성
  const getQRCodeValue = () => {
    const essentialInfo = {
      name: cardData.title || 'Business Card',
      phone: cardData.phone || '',
    };
    return JSON.stringify(essentialInfo);
  };

  return (
    <div className="space-y-4 pt-4">
      <button
        onClick={generateImage}
        disabled={isGenerating}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:bg-blue-400"
      >
        {isGenerating ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Download size={20} />
            Publish Card
          </>
        )}
      </button>
      
      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Share Your Card</h3>
            
            <div className="flex flex-col items-center mb-6">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <QRCode value={getQRCodeValue()} size={200} />
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                Scan this code to view your contact information
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={shareToKakao}
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md font-medium transition-colors"
              >
                <Share2 size={18} />
                카카오톡 공유하기
              </button>
              
              <button
                onClick={() => setShowQRModal(false)}
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardActions;