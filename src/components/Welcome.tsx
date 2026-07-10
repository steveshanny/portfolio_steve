'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { FaRocket, FaCode, FaStar, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

export default function Welcome({ onEnter }: { onEnter: () => void }) {
  const { t, language, changeLanguage } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulation du chargement
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-teal-950/50 to-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Carte principale */}
        <div className="bg-black/40 backdrop-blur-lg border-2 border-teal-500/30 rounded-3xl px-4 sm:px-12 shadow-2xl shadow-teal-500/20">
          
          {/* Sélecteur de langue en haut à droite */}
          <div className="flex justify-between mb-4 sm:mt-8 mt-4 items-center">
            <div className='flex items-center text-sm sm:text-lg' >
                <Image src={"/images/steve_shanny.jpg"} className='rounded-full mr-3' width={30} height={30} alt='Steve Shanny' ></Image>
                <div>Steve Shanny</div>
                
            </div>
            <div className="relative">
              <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 text-sm" />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-black/60 border border-teal-500/30 rounded-lg sm:py-2 py-1 pl-10 pr-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 appearance-none cursor-pointer"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>

          {/* En-tête avec icône animée */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="relative inline-block">

              <div className="absolute -top-2 -right-2">
                <FaStar className="text-yellow-400 text-sm animate-spin" />
              </div>
            </div>
          </div>

          {/* Barre de progression */}
          {isLoading && (
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>{t('welcome.loading')}</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Message principal */}
          <div className="rounded-2xl text-justify sm:mb-14 mb-10">
            <div className="flex items-start mb-4">
              <FaCode className="text-teal-400 text-lg mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-300 text-xs sm:text-sm sm:leading-6 leading-5">
                {t('welcome.message')}
              </p>
            </div>
          </div>

          {/* Bouton d'entrée */}
          <div className="text-center">
            <button
              onClick={onEnter}
              disabled={isLoading}
              className="group relative bg-gradient-to-r from-teal-600 to-teal-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 px-6 rounded-2xl transition-all duration-500 ease-out transform hover:scale-105 border-2 border-teal-400/50 w-auto"
            >
              <div className="flex items-center justify-center">
                <FaRocket className={`mr-3 transition-transform duration-300 ${isLoading ? 'animate-bounce' : 'group-hover:rotate-45'}`} />
                <span className="text-xs sm:text-sm">
                  {isLoading ? t('welcome.loading') : t('welcome.button')}
                </span>
              </div>
              
              {/* Effet de lueur */}
              <div className="absolute inset-0 rounded-2xl bg-teal-400/20 blur-xl  transition-all duration-400 -z-10"></div>
            </button>
            
            {/* Indicateur de langue */}
            <div className="mt-4 text-xs text-gray-500 sm:mb-8 mb-4">
              {language === 'fr' ? 'Français' : 'English'} • v1.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}