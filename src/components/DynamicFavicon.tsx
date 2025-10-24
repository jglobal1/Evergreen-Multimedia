import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const DynamicFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = theme === 'dark' ? '/favicon.svg' : '/favicon-light.svg';
      }
    };

    updateFavicon();
  }, [theme]);

  return null; // This component doesn't render anything
};

export default DynamicFavicon;
