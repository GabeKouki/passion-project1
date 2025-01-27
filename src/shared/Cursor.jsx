import React, { useState, useEffect, useCallback, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isHoveringText, setIsHoveringText] = useState(false);

  const moveCursor = useCallback((e) => {
    if (cursorRef.current) {
      requestAnimationFrame(() => {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
  }, []);

  useEffect(() => {
    const checkTextHover = (e) => {
      const isTextElement = ['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'LABEL'].includes(e.target.tagName);
      setIsHoveringText(isTextElement);
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', checkTextHover);
    document.addEventListener('mouseout', checkTextHover);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', checkTextHover);
      document.removeEventListener('mouseout', checkTextHover);
    };
  }, [moveCursor]);

  return (
    <svg 
      ref={cursorRef}
      xmlns="http://www.w3.org/2000/svg"
      width="20" 
      height="20" 
      viewBox="0 0 20 20"
      style={{
        position: 'fixed', 
        pointerEvents: 'none', 
        zIndex: 9999,
        transition: 'all 0.1s ease-out'
      }}
    >
      {isHoveringText ? (
        <rect 
          x="9" 
          y="0" 
          width="2" 
          height="20" 
          fill="red" 
          className="blinking-cursor"
        />
      ) : (
        <circle 
          cx="10" 
          cy="10" 
          r="10" 
          fill="rgba(255,0,0,0.5)" 
          stroke="red"
        />
      )}
    </svg>
  );
};

export default Cursor;