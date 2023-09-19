import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { MobileCarousel } from "./components/MobileCarousel";
import { LightBox } from "./components/LightBox";
import { Product } from "./components/Product";
import { CartModal } from "./components/CartModal";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const totalProductImages = 4;
  const isMobile = useMediaQuery();
  const [productCount, setProductCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [currentThumbnailImg, setCurrentThumbnailImg] = useState(0);

  const handleShowCartModal = () => setShowCartModal(!showCartModal);

  const handleUpdateCart = () => {
    console.log(productCount);
  };

  const handleIncrementProductCount = () => setProductCount((prev) => prev + 1);

  const handleDecrementProductCount = () => {
    if (productCount === 0) return;
    setProductCount((prev) => prev - 1);
  };

  const handleRemoveItemsFromCart = () => setProductCount(0);

  const handleShowNextThumbnailImg = () => {
    if (currentThumbnailImg === totalProductImages - 1) {
      setCurrentThumbnailImg(0);
      return;
    }

    setCurrentThumbnailImg((prev) => prev + 1);
  };

  const handleShowPreviousThumbnailImg = () => {
    if (currentThumbnailImg === 0) {
      setCurrentThumbnailImg(totalProductImages - 1);
      return;
    }
    setCurrentThumbnailImg((prev) => prev - 1);
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
          <MobileCarousel
            handleShowPreviousThumbnailImg={handleShowPreviousThumbnailImg}
            currentImage={currentThumbnailImg}
            handleShowNextThumbnailImg={handleShowNextThumbnailImg}
          />
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
