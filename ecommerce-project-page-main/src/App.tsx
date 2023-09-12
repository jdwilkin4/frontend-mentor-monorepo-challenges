import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { MobileCarousel } from "./components/MobileCarousel";
import { LightBox } from "./components/LightBox";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery();
  return (
    <>
      {isMobile ? (
        <>
          <MobileNav />
          <MobileCarousel />
        </>
      ) : (
        <>
          <Navbar />
          <LightBox />
        </>
      )}
    </>
  );
}

export default App;
