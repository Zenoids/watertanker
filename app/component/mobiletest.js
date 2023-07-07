"use client"
import React, { useEffect, useState } from 'react';

export default function MyComponent() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobileView(innerWidth <= 640); // Adjust the threshold as per your requirements
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? <p>Website is in mobile view</p> : <p>Website is not in mobile view</p>}
      {/* Rest of your component */}
    </div>
  );
}
