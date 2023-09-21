import "./Navbar.scss";

type NavbarProps = {
  handleShowCartModal: () => void;
  productCount: number;
  isCartFull: boolean;
};

export function Navbar({
  handleShowCartModal,
  productCount,
  isCartFull,
}: NavbarProps) {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>
            <img className="logo" src="./images/logo.svg" alt="company logo" />
          </li>
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            {isCartFull && (
              <span className="product-count">{productCount}</span>
            )}
            <button onClick={handleShowCartModal} type="button">
              <img
                className="shopping-cart"
                src="./images/icon-cart.svg"
                alt="shopping cart"
              />
            </button>
          </li>
          <li>
            <button type="button">
              <img
                className="user-avatar"
                src="./images/image-avatar.png"
                alt="user avatar"
              />
            </button>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
