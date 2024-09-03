import { useEffect } from 'react';
import { motion } from 'framer-motion';

const useSectionAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("animate");
        } else {
          section.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return useSectionAnimations;
};

export default useSectionAnimations;
