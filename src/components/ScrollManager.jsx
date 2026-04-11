import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // If browser has saved scroll (back/forward)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const savedPosition = sessionStorage.getItem(location.key);

    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      window.scrollTo(x, y);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      sessionStorage.setItem(
        location.key,
        JSON.stringify({
          x: window.scrollX,
          y: window.scrollY,
        })
      );
    };
  }, [location]);

  return null;
};

export default ScrollManager;