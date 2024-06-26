import { quizzes } from "../data.json";
import "./StartScreen.scss";

type StartScreenProps = {
  handleStartQuiz: (title: string) => void;
};

export default function StartScreen({ handleStartQuiz }: StartScreenProps) {
  return (
    <div className="start-screen-container">
      <div className="start-screen-container__text-container">
        <h1>
          <span>Welcome to the</span>
          <br />
          <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="start-screen-container__button-container">
        {quizzes.map(({ title, icon, backgroundColor }) => (
          <button
            onClick={() => handleStartQuiz(title)}
            key={title}
            type="button"
          >
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
