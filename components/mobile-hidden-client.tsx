'use client';

import { useEffect, useState } from 'react';
import SideBar from './sidebar/sidebar';

export const MobileHiddenClient = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)'); // Adjust the breakpoint as needed

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Add event listener
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  if (!isLargeScreen) {
    return null; // Return null to hide the content on small screens
  }

  return (
    <div>
      <div className="h-[100vh] w-40 bg-zinc-900/70 fixed">
        <SideBar />
      </div>
      <div className="h-[200vh] w-40 bg-zinc-900/70">
        {/* Additional content here */}
      </div>
    </div>
  );
};
