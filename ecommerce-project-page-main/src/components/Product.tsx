type ProductProps = {
  productCount: number;
  handleUpdateProductCount: (productCount: number) => void;
};

export function Product({
  productCount,
  handleUpdateProductCount,
}: ProductProps) {
  return (
    <div className="product-container">
      <p className="product-container__tagline">Sneaker Company</p>
      <h1 className="product-container__name">Fall Limited Edition Sneakers</h1>
      <p className="product-container__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="product-container__sales-price-container">
        <p className="product-container__sales-price-container__sales-price">
          $125.00
        </p>
        <p className="product-container__sales-price-container__discount">
          50%
        </p>
      </div>
      <p className="product-container__regular-price">$250.00</p>
      <div className="product-container__cart-container">
        <div className="product-container__cart-container__quantity-container">
          <button className="product-container__cart-container__quantity-container__decrement-button">
            -
          </button>
          <p className="product-container__cart-container__quantity-container__quantity">
            {productCount}
          </p>
          <button className="product-container__cart-container__quantity-container__increment-button">
            +
          </button>
        </div>
        <button
          onClick={() => handleUpdateProductCount(productCount)}
          className="product-container__cart-container__add-to-cart-button"
        >
          <img src="./images/icon-cart.svg" alt="" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}
