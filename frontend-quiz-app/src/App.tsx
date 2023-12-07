import { useState } from "react";
import Navbar from "./components/Navbar";
import StartScreen from "./components/StartScreen";
import { quizzes } from "./data.json";
import "./App.css";

// testing default values
const { icon, title, backgroundColor } = quizzes[3];

function App() {
  const [isStartScreenShowing, setIsStartScreenShowing] = useState(true);
  return (
    <main>
      <Navbar
        backgroundColor={backgroundColor}
        quizIcon={icon}
        quizTitle={title}
        isStartScreenShowing={isStartScreenShowing}
      />
      {isStartScreenShowing && <StartScreen />}
    </main>
  );
}

export default App;
