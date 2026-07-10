'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    rootMargin: '0px 0px -50px 0px'
  });

  return { ref, isInView };
};