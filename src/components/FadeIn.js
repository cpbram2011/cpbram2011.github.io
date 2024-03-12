import React, { useEffect, useRef, useState } from 'react';

const FadeInDiv = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // The callback will return an array of entries, even if you're observing a single item
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        // Optional settings
        // root: null, // Use the viewport
        threshold: 0.1, // Item becomes visible when 10% of it is in the viewport
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
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};


export default FadeInDiv;
