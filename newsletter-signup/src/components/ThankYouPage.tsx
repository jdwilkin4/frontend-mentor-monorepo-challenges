import "./ThankYouPage.scss";
import Button from "./Button";

type Props = {
  userEmail: string;
  returnToMainPage: () => void;
};

const ThankYouPage = ({ userEmail, returnToMainPage }: Props) => {
  return (
    <div className="thank-you-page-container">
      <img
        className="thank-you-page-container__success-icon"
        src="./icon-success.svg"
        alt="success icon"
      />
      <h1 className="thank-you-page-container__title">
        Thanks for subscribing!
      </h1>
      <p className="thank-you-page-container__description">
        A confirmation email has been sent to <strong>{userEmail}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <div className="thank-you-page-container__dismiss-btn-container">
        <Button
          handleClick={returnToMainPage}
          text="Dismiss message"
          buttonType="button"
        />
      </div>
    </div>
  );
};

export default ThankYouPage;
