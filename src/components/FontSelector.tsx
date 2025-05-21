import React from 'react';
import { useCardContext } from '../context/CardContext';
import { Type } from 'lucide-react';

// 폰트 옵션
const fontOptions = [
  { name: 'Default', value: 'system-ui, -apple-system, sans-serif' },
  { name: 'Serif', value: 'Georgia, Times New Roman, serif' },
  { name: 'Monospace', value: 'Consolas, monospace' },
  { name: 'Rounded', value: 'ui-rounded, Hiragino Maru Gothic ProN, sans-serif' },
  { name: 'Cursive', value: 'cursive' },
  { name: 'Comic Sans', value: '"Comic Sans MS", cursive, sans-serif' },
  { name: 'Playfair Display', value: '"Playfair Display", serif' },
  { name: 'Raleway', value: '"Raleway", sans-serif' },
  { name: 'Indie Flower', value: '"Indie Flower", cursive' },
  { name: 'Roboto', value: '"Roboto", sans-serif' },
  { name: 'Open Sans', value: '"Open Sans", sans-serif' },
  { name: 'Lobster', value: '"Lobster", cursive' },
  { name: 'Pacifico', value: '"Pacifico", cursive' },
  { name: 'Merriweather', value: '"Merriweather", serif' },
];

const FontSelector: React.FC = () => {
  const { cardData, updateCardData } = useCardContext();

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateCardData({ fontFamily: e.target.value });
  };

  return (
    <div className="space-y-2">
      <label htmlFor="fontFamily" className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <Type size={16} />
        글꼴 선택
      </label>
      <select
        id="fontFamily"
        name="fontFamily"
        value={cardData.fontFamily}
        onChange={handleFontChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        {fontOptions.map((font) => (
          <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
            {font.name}
          </option>
        ))}
      </select>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
        <p className="text-sm text-gray-600">
          Preview: <span style={{ fontFamily: cardData.fontFamily }}>This is how your text will look</span>
        </p>
      </div>
    </div>
  );
};

export default FontSelector;