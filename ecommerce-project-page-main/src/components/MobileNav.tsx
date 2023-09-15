import "./MobileNav.scss";

export function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <button className="btn" type="button">
            <img src="./images/icon-menu.svg" alt="" />
          </button>
        </li>
        <li>
          <img
            className="mobile-nav__sneakers-logo"
            src="./images/logo.svg"
            alt="sneakers logo"
          />
        </li>
        <li>
          <button className="btn" type="button">
            <img
              className="mobile-nav__shopping-cart"
              src="./images/icon-cart.svg"
              alt="shopping cart"
            />
          </button>
        </li>
        <li>
          <button className="btn" type="button">
            <img
              className="mobile-nav__user-avatar"
              src="./images/image-avatar.png"
              alt="user avatar"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
