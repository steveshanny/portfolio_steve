'use client';

import { useState, useEffect } from 'react';
import WelcomePage from '@/components/Welcome';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenWelcome = window.localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  const handleEnterPortfolio = () => {
    window.localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };

if (!isMounted) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950/90 via-gray-950 to-teal-950/90 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background : Effet de profondeur avec des flous */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px]" style={{ animationDelay: '1s' }}></div>

      {/* Conteneur central */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* L'indicateur avec une mise en scène */}
        <div className="relative p-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-2xl shadow-2xl">
          {/* Cercle de chargement externe fin */}
          <div className="absolute inset-0 border-2 border-teal-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-t-teal-500/60 rounded-full animate-spin [animation-duration:3s]"></div>
          
          <div className="scale-150 transform">
             <AvailabilityIndicator />
          </div>
        </div>

        {/* Texte de chargement élégant */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] uppercase font-light text-teal-100/60 ml-1">
            Loading ...
          </span>
        </div>
      </div>

      {/* Lignes de scan "Tech" très discrètes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(20,184,166,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_10s_linear_infinite] pointer-events-none"></div>
    </div>
  );
}

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnterPortfolio} />;
  }

  return (
    <>
      {children}
    </>
  );
}