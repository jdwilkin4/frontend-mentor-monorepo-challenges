import "./CartModal.scss";

type CartModalProps = {
  productCount: number;
};

export function CartModal({ productCount }: CartModalProps) {
  return (
    <div className="cart-modal">
      <h2>Cart</h2>
      <hr />
      {productCount === 0 ? (
        <p className="cart-modal__empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div>
            <img src="./images/image-product-1-thumbnail.jpg" alt="" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 X {productCount}{" "}
                <span>${(productCount * 125).toFixed(2)}</span>
              </p>
            </div>
            <img src="./images/icon-delete.svg" alt="" />
          </div>
          <button type="button">Checkout</button>
        </>
      )}
    </div>
  );
}
