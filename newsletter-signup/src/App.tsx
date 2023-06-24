import { useState } from "react";
import NewsletterContainer from "./components/NewsletterContainer";
import ThankYouPage from "./components/ThankYouPage";
import "./App.scss";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>("ash@loremcompany.com");

  return (
    <div className="container">
      {showThankYouPage ? (
        <ThankYouPage userEmail={userEmail} />
      ) : (
        <NewsletterContainer />
      )}
    </div>
  );
}

export default App;
