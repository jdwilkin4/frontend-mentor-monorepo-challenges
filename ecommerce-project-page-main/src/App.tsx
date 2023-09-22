import { useState } from "react";
import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { MobileCarousel } from "./components/MobileCarousel";
import { LightBox } from "./components/LightBox";
import { Product } from "./components/Product";
import { CartModal } from "./components/CartModal";
import useMediaQuery from "./hooks/useMediaQuery";
import "./App.scss";

function App() {
  const totalProductImages = 4;
  const isMobile = useMediaQuery();
  const [productCount, setProductCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [currentThumbnailImg, setCurrentThumbnailImg] = useState(0);
  const [isCartFull, setIsCartFull] = useState(false);

  const handleShowCartModal = () => setShowCartModal(!showCartModal);

  const handleUpdateCart = () => {
    if (productCount === 0) return;
    setIsCartFull(true);
  };

  const handleIncrementProductCount = () => setProductCount((prev) => prev + 1);

  const handleDecrementProductCount = () => {
    setProductCount((prev) => {
      if (prev === 1) {
        setIsCartFull(false);
        return 0;
      }

      return prev - 1;
    });
  };

  const handleRemoveItemsFromCart = () => {
    setIsCartFull(false);
    if (productCount > 0) {
      setProductCount(0);
      return;
    }
  };

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
          isCartFull={isCartFull}
          handleRemoveItemsFromCart={handleRemoveItemsFromCart}
          productCount={productCount}
        />
      )}

      {isMobile ? (
        <>
          <MobileNav
            isCartFull={isCartFull}
            productCount={productCount}
            handleShowCartModal={handleShowCartModal}
          />
          <MobileCarousel
            handleShowPreviousThumbnailImg={handleShowPreviousThumbnailImg}
            currentImage={currentThumbnailImg}
            handleShowNextThumbnailImg={handleShowNextThumbnailImg}
          />
          <Product
            productCount={productCount}
            handleDecrementProductCount={handleDecrementProductCount}
            handleIncrementProductCount={handleIncrementProductCount}
            handleUpdateCart={handleUpdateCart}
          />
        </>
      ) : (
        <>
          <Navbar
            isCartFull={isCartFull}
            productCount={productCount}
            handleShowCartModal={handleShowCartModal}
          />

          <div className="product-information">
            <LightBox />

            <Product
              productCount={productCount}
              handleDecrementProductCount={handleDecrementProductCount}
              handleIncrementProductCount={handleIncrementProductCount}
              handleUpdateCart={handleUpdateCart}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
