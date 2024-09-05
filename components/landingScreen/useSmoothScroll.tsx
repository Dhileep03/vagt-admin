import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || '');

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);
};

export default useSmoothScroll;
