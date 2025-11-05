import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('BackToTopButton: Component mounted');
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset;
      console.log('BackToTopButton: Scroll position =', scrollY);
      if (scrollY > 300) {
        console.log('BackToTopButton: Showing button');
        setIsVisible(true);
      } else {
        console.log('BackToTopButton: Hiding button');
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#21A1D9] text-white p-3 rounded-full shadow-lg hover:bg-[#1a7fb0] transition-all duration-300 z-40 hover:scale-110"
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
