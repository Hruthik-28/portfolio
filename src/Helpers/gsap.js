import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const animateLeftToRight = (className) => {
  useEffect(() => {
    const elements = document.querySelectorAll(className);

    gsap.set(elements, { opacity: 0, x: '-40%' });

    gsap.to(elements, {
      opacity: 1,
      x: '0%',
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 0.4
    });
  }, [className]);
};

const animateImagesRightToLeft = (className) => {
  useEffect(() => {
    const images = document.querySelectorAll(`.${className}`);

    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(images, { x: '100%' });

    tl.fromTo(
      images,
      { x: '100%' },
      {
        x: '-100%',
        duration: 10,
        ease: 'linear',
      }
    );
  }, [className]);
}

export {animateLeftToRight, animateImagesRightToLeft};