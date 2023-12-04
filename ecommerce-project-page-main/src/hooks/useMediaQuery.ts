import { useState } from "react";

export default function useMediaQuery() {
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return isTablet;
}
