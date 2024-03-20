import React, { useEffect, useRef, useState } from 'react';

const FadeInDiv = ({ children, delay = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.2s ease-out`,
        transitionDelay: isVisible ? `${delay}ms` : 0
      }}
    >
      {children}
    </div>
  );
};

export default FadeInDiv;
