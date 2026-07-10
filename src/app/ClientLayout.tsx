'use client';

import { useState, useEffect } from 'react';
import WelcomePage from '@/components/Welcome';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 120);
    const hasSeenWelcome = window.localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }

    return () => window.clearTimeout(timer);
  }, []);

  const handleEnterPortfolio = () => {
    window.localStorage.setItem('hasSeenWelcome', 'true');
    setShowWelcome(false);
  };

  if (isBooting) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="flex items-center gap-3 rounded-full border border-teal-500/20 px-4 py-3 text-sm text-teal-100">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
          <span>Chargement…</span>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnterPortfolio} />;
  }

  return <>{children}</>;
}