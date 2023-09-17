import "./CartModal.scss";

type CartModalProps = {
  productCount: number;
  handleRemoveItemsFromCart: () => void;
};

export function CartModal({
  productCount,
  handleRemoveItemsFromCart,
}: CartModalProps) {
  return (
    <div className="cart-modal">
      <h2>Cart</h2>
      <hr />
      {productCount === 0 ? (
        <p className="cart-modal__empty-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-modal__filled-cart">
          <div className="cart-modal__filled-cart__product-description-container">
            <img
              className="cart-modal__filled-cart__product-description-container__product-img"
              src="./images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div className="cart-modal__filled-cart__product-description-container__description-and-price">
              <p className="cart-modal__filled-cart__product-description-container__description-and-price__description">
                Fall Limited Edition Sneakers
              </p>
              <p className="cart-modal__filled-cart__product-description-container__description-and-price__price">
                $125.00 x {productCount}{" "}
                <span className="cart-modal__filled-cart__product-description-container__description-and-price__price__sales-price">
                  ${(productCount * 125).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={handleRemoveItemsFromCart}
              className="cart-modal__filled-cart__product-description-container__delete-btn btn"
              type="button"
            >
              <img src="./images/icon-delete.svg" alt="" />
            </button>
          </div>
          <button
            className="btn cart-modal__filled-cart__checkout-btn"
            type="button"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
