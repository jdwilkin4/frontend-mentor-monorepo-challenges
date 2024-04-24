import { useState } from "react";
import { QuizProps } from "../types";
import iconCorrect from "../../public/assets/images/icon-incorrect.svg";
import iconIncorrect from "../../public/assets/images/icon-correct.svg";
import "./Quiz.scss";

type QuizTemplateProps = {
  currentQuiz: {
    icon: string;
    title: string;
    backgroundColor: string;
    questions: QuizProps[];
  };
};

type buttonTypes = "Submit Answer" | "Next Question";

export default function QuizTemplate({ currentQuiz }: QuizTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState({
    questionNum: 1,
    currentIndex: 0,
  });

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [buttonText, setButtonText] = useState<buttonTypes>("Submit Answer");
  const { title, questions } = currentQuiz;
  const { answer, options, question } = questions[currentQuestion.currentIndex];
  const lettersArr = ["A", "B", "C", "D"];
  console.log(currentQuiz);

  return (
    <section className="question-container">
      <p className="question-container__curr-question">
        Question {currentQuestion.questionNum} out of {questions.length}
      </p>

      <h2 className="question-container__question">{question}</h2>

      <div className="question-container__progress-bar"></div>

      <div className="question-container__btn-container">
        {options.map((option, index) => (
          <button key={option}>
            <span>{lettersArr[index]}</span> <span>{option}</span>
            {isCorrectAnswer !== null && (
              <img src={isCorrectAnswer ? iconCorrect : iconIncorrect} alt="" />
            )}
          </button>
        ))}
      </div>

      <button className="question-container__submit-btn" type="button">
        {buttonText}
      </button>
    </section>
  );
}
