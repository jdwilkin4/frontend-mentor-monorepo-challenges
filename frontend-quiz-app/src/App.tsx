import { useState } from "react";
import Navbar from "./components/Navbar";
import StartScreen from "./components/StartScreen";
import ResultsScreen from "./components/Results";
import QuizTemplate from "./components/Quiz";
import { quizzes } from "./data.json";
import { QuizProps } from "./types";
import "./App.css";

function App() {
  const [isStartScreenShowing, setIsStartScreenShowing] = useState(true);
  const [isQuizShowing, setIsQuizShowing] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState({
    icon: "",
    title: "",
    backgroundColor: "",
    questions: [] as QuizProps[],
  });

  function getQuiz(title: string) {
    const quiz = quizzes.find((quiz) => quiz.title === title);

    if (quiz) {
      const { icon, title, backgroundColor, questions } = quiz;
      setCurrentQuiz({ icon, title, backgroundColor, questions });
    }
  }

  function handleStartQuiz(title: string) {
    setIsStartScreenShowing(false);
    setIsQuizShowing(true);
    getQuiz(title);
  }

  function showQuiz() {
    if (isStartScreenShowing) {
      return <StartScreen handleStartQuiz={handleStartQuiz} />;
    } else {
      return isQuizShowing ? (
        <QuizTemplate currentQuiz={currentQuiz} />
      ) : (
        <ResultsScreen />
      );
    }
  }

  return (
    <main>
      <Navbar
        backgroundColor={currentQuiz.backgroundColor}
        quizIcon={currentQuiz.icon}
        quizTitle={currentQuiz.title}
        isStartScreenShowing={isStartScreenShowing}
      />
      {showQuiz()}
    </main>
  );
}

export default App;
