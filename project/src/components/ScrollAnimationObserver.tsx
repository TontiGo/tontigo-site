import React, { useEffect, useRef } from 'react';

interface ScrollAnimationObserverProps {
  children: React.ReactNode;
}

const ScrollAnimationObserver: React.FC<ScrollAnimationObserverProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    animateElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        animateElements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, [children]);

  return <>{children}</>;
};

export default ScrollAnimationObserver;