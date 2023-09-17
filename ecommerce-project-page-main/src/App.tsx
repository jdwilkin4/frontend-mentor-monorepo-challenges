import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { MobileCarousel } from "./components/MobileCarousel";
import { LightBox } from "./components/LightBox";
import { Product } from "./components/Product";
import { CartModal } from "./components/CartModal";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery();
  const [productCount, setProductCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleUpdateCart = () => {
    console.log(productCount);
  };

  const handleIncrementProductCount = () => {
    setProductCount((prev) => prev + 1);
  };

  const handleDecrementProductCount = () => {
    if (productCount === 0) return;
    setProductCount((prev) => prev - 1);
  };

  const handleRemoveItemsFromCart = () => {
    setProductCount(0);
  };

  return (
    <>
      {showCartModal && (
        <CartModal
          handleRemoveItemsFromCart={handleRemoveItemsFromCart}
          productCount={productCount}
        />
      )}

      {isMobile ? (
        <>
          <MobileNav
            productCount={productCount}
            handleShowCartModal={handleShowCartModal}
          />
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
        handleDecrementProductCount={handleDecrementProductCount}
        handleIncrementProductCount={handleIncrementProductCount}
        handleUpdateCart={handleUpdateCart}
      />
    </>
  );
}

export default App;
