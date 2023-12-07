import { quizzes } from "../data.json";
import "./StartScreen.scss";

export default function StartScreen() {
  return (
    <div className="start-screen-container">
      <div className="start-screen-container__text-container">
        <h1 className="start-screen-container__text-container__welcome-text">
          Welcome to the
        </h1>
        <strong>Frontend Quiz!</strong>
        <p className="start-screen-container__text-container__tagline">
          Pick a subject to get started.
        </p>
      </div>
      <div className="start-screen-container__button-container">
        {quizzes.map(({ title, icon, backgroundColor }) => (
          <button key={title} type="button">
            <img
              style={{ backgroundColor }}
              src={icon}
              alt={`${title} icon`}
              className={backgroundColor}
            />
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
