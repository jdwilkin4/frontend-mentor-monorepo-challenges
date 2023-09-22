import "./Product.scss";

type ProductProps = {
  productCount: number;
  handleIncrementProductCount: () => void;
  handleDecrementProductCount: () => void;
  handleUpdateCart: () => void;
};

export function Product({
  productCount,
  handleUpdateCart,
  handleDecrementProductCount,
  handleIncrementProductCount,
}: ProductProps) {
  return (
    <div className="product-container">
      <p className="product-container__tagline">Sneaker Company</p>
      <h1 className="product-container__product-name">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product-container__product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="product-container__price-container">
        <div className="product-container__price-container__sales-price-container">
          <p className="product-container__price-container__sales-price-container__sales-price">
            $125.00
          </p>
          <p className="product-container__price-container__sales-price-container__discount">
            50%
          </p>
        </div>
        <p className="product-container__price-container__regular-price">
          $250.00
        </p>
      </div>
      <div className="product-container__cart-and-product-count">
        <div className="product-container__cart-and-product-count__cart-container">
          <button
            onClick={handleDecrementProductCount}
            className="product-container__cart-and-product-count__cart-container__update-count-btn"
          >
            -
          </button>
          <p className="product-container__cart-and-product-count__cart-container__quantity">
            {productCount}
          </p>
          <button
            onClick={handleIncrementProductCount}
            className="product-container__cart-and-product-count__cart-container__update-count-btn"
          >
            +
          </button>
        </div>
        <button
          onClick={handleUpdateCart}
          className="product-container__cart-and-product-count__add-to-cart-btn"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}
