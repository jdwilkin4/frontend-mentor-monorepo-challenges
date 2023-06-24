import { useState } from "react";
import NewsletterContainer from "./components/NewsletterContainer";
import ThankYouPage from "./components/ThankYouPage";
import "./App.scss";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(true);

  return (
    <div className="container">
      {showThankYouPage ? <ThankYouPage /> : <NewsletterContainer />}
    </div>
  );
}

export default App;
