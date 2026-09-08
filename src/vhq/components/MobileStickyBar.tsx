import React, { useState, useEffect } from 'react';
import { ArrowRight, Sliders, Mail, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface MobileStickyBarProps {
  onScrollToForm: () => void;
  onScrollToFeatures: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onScrollToForm,
  onScrollToFeatures,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const intakeElement = document.getElementById('intake');
      const intakeTop = intakeElement ? intakeElement.offsetTop - 300 : 99999;

      // Show after scrolling 350px down from top, hide once user reaches the form
      if (scrollY > 350 && scrollY < intakeTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl safe-bottom transition-all">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          onClick={onScrollToFeatures}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 cursor-pointer min-h-[44px]"
        >
          <Sliders className="w-3.5 h-3.5 text-teal-400" />
          <span>Modules</span>
        </button>

        <button
          onClick={onScrollToForm}
          className="flex-[2] py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md cursor-pointer min-h-[44px]"
        >
          <span>MAP MY HQ</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
