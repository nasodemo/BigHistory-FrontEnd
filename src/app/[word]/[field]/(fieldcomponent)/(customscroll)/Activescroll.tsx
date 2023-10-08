"use client"

import { useEffect, useRef, useState } from 'react';

export const Activescroll = (sectionsCount: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([...Array(sectionsCount)].map(() => useRef(null)));

  const onScroll = () => {
    const scrollY = window.scrollY;
    const indexes = sectionRefs.current.map(ref => {
      if (ref.current) {
        return ref.current;
      }
      return 0; 
    });

    const index = indexes.findIndex((value, i, arr) => 
      i === arr.length - 1 ? scrollY >= value : scrollY >= value && scrollY < arr[i + 1]
    );

    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { activeIndex, sectionRefs };
};