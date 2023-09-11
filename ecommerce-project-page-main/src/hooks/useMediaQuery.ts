import { useState } from "react";

export default function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 375) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return isMobile;
}
