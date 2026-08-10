import React, { useState, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

const AvailabilityIndicator = () => {
  const { t } = useTranslation();
  const [glow, setGlow] = useState(false);

  useEffect(() => {

    const glowInterval = setInterval(() => {
      setGlow(!glow);
    }, 2000);

    return () => {
      clearInterval(glowInterval);
    };
  }, [glow]);

  return (
    <div className="relative group">
      {/* Conteneur principal */}
      <div className="relative h-16 w-18 flex items-center justify-center overflow-hidden">
        <Image src="/apple-touch-icon.png" alt="Steve" width={33} height={33} className="rounded-full" />
      </div>
      <div>
      </div>

      {/* Tooltip - Visible au hover */}
      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="relative">
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-0 border-r-4 border-r-teal-500 border-t-transparent border-b-transparent"></div>
          
          <div className="bg-gray-900 border border-teal-500/30 rounded-lg px-3 py-2 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <FaUserTie className="text-teal-400 text-xs" />
              <div className="text-xs font-medium whitespace-nowrap">
                <span className="text-white">{t("hero.available")}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Effet de rayonnement au hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>
    </div>
  );
};



export default AvailabilityIndicator;