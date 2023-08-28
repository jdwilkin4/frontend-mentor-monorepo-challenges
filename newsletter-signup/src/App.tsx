import { useState } from "react";
import NewsletterContainer from "./components/NewsletterContainer";
import ThankYouPage from "./components/ThankYouPage";
import "./App.scss";

function App() {
  const [isThankYouPageShowing, setIsThankYouPageShowing] =
    useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!emailRegex.test(e.target[0].value)) {
      setIsEmailInvalid(true);
      return;
    } else {
      setIsEmailInvalid(false);
      setIsThankYouPageShowing(true);
    }
  };

  const returnToMainPage = () => {
    setIsThankYouPageShowing(false);
    setUserEmail("");
  };

  return (
    <div className="container">
      {isThankYouPageShowing ? (
        <ThankYouPage
          returnToMainPage={returnToMainPage}
          userEmail={userEmail}
        />
      ) : (
        <NewsletterContainer
          isEmailInvalid={isEmailInvalid}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
