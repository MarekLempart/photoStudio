// src/components/ScrollToTop.tsx

// ScrollToTop does not work properly on mobile devices
//  Checked on iPhone 15 Pro on Safari Browser
//  To be improved on iPhone
//  On Android it works.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
