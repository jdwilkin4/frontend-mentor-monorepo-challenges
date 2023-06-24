import { useState } from "react";
import NewsletterContainer from "./components/NewsletterContainer";
import ThankYouPage from "./components/ThankYouPage";
import "./App.scss";

function App() {
  const [isThankYouPageShowing, setIsThankYouPageShowing] =
    useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("ash@loremcompany.com");

  return (
    <div className="container">
      {isThankYouPageShowing ? (
        <ThankYouPage userEmail={userEmail} />
      ) : (
        <NewsletterContainer />
      )}
    </div>
  );
}

export default App;
