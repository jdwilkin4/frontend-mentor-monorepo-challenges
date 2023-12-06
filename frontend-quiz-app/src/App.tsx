import { useState } from "react";
import Navbar from "./components/Navbar";
import { quizzes } from "./data.json";
import "./App.css";

// testing default values
const { icon, title } = quizzes[3];

function App() {
  const [isStartScreenShowing, setIsStartScreenShowing] = useState(false);
  return (
    <>
      <Navbar
        quizIcon={icon}
        quizTitle={title}
        isStartScreenShowing={isStartScreenShowing}
      />
    </>
  );
}

export default App;
