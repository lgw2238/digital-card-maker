import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 animate-gradient-xy">
      <div className="max-w-md w-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-4">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              디지털 명함 제작기
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            ✨ 나만의 특별한 디지털 명함을<br/>
            손쉽게 만들어보세요
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>간편한 정보 입력</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>실시간 미리보기</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>커스텀 디자인</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/maker')}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-200 font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;