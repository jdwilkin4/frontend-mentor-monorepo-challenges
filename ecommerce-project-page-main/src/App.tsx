import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { MobileCarousel } from "./components/MobileCarousel";
import { LightBox } from "./components/LightBox";
import { Product } from "./components/Product";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery();
  const [productCount, setProductCount] = useState(0);
  const handleUpdateProductCount = (productCount: number) => {
    console.log(productCount);
  };
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
      <Product
        productCount={productCount}
        handleUpdateProductCount={handleUpdateProductCount}
      />
    </>
  );
}

export default App;
