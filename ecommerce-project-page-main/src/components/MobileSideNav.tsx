import "./MobileSideNav.scss";

type SideNavProps = {
  handleShowSideNav: () => void;
};

export function SideNav({ handleShowSideNav }: SideNavProps) {
  return (
    <div className="side-nav">
      <ul className="side-nav__nav-items-container">
        <li>
          <button
            className="close-btn"
            onClick={handleShowSideNav}
            type="button"
          >
            <img src="./images/icon-close.svg" alt="" />
          </button>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
