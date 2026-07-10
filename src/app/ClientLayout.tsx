'use client';

import { useEffect, useState } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 120);
    return () => window.clearTimeout(timer);
  }, []);

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

  return <>{children}</>;
}