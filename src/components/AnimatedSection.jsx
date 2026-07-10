'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px 60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    const distance = 60;
    if (direction === 'up') return `translate3d(0, ${distance}px, 0) scale(0.98)`;
    if (direction === 'down') return `translate3d(0, -${distance}px, 0) scale(0.98)`;
    if (direction === 'left') return `translate3d(${distance}px, 0, 0) scale(0.98)`;
    if (direction === 'right') return `translate3d(-${distance}px, 0, 0) scale(0.98)`;
    return 'translate3d(0, 0, 0) scale(0.98)';
  };

  return (
    <div
      ref={ref}
      className={`${className} overflow-hidden`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;