import "./Navbar.scss";

type NavbarProps = {
  quizTitle: string;
  quizIcon: string;
  isStartScreenShowing: boolean;
};

export default function Navbar({
  quizIcon,
  quizTitle,
  isStartScreenShowing,
}: NavbarProps) {
  return (
    <nav className="flex-container">
      <div className="icon-container flex-container">
        {!isStartScreenShowing && (
          <>
            <img src={quizIcon} alt={`${quizTitle} icon`} />
            <p>{quizTitle}</p>
          </>
        )}
      </div>

      <div className="theme-switch-wrapper flex-container">
        {/*TODO: add light/dark logic*/}
        <img src="/assets/images/icon-sun-dark.svg" alt="sun icon" />
        <label
          className="theme-switch-wrapper__theme-switch-label"
          htmlFor="checkbox"
        >
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <img src="/assets/images/icon-moon-dark.svg" alt="moon icon" />
      </div>
    </nav>
  );
}
