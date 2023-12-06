import { quizzes } from "../data.json";
import "./StartScreen.scss";

console.log(quizzes);

export default function StartScreen() {
  return (
    <div className="start-screen-container">
      <div className="start-screen-container__text-container">
        <h1>
          Welcome to the
          <br />
          <strong>Frontend Quiz!</strong>
        </h1>
        <p>Pick a subject to get started.</p>
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
