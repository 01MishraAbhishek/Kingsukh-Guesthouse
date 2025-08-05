// ScrollIndicator.jsx
import { useEffect, useState } from 'react';

function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
      <div
        className="h-full bg-pink-600 transition-all duration-300"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;