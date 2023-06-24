import "./ThankYouPage.scss";
import Button from "./Button";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page-container">
      <img
        className="thank-you-page-container__success-icon"
        src="./src/assets/images/icon-success.svg"
        alt="success icon"
      />
      <h1 className="thank-you-page-container__title">
        Thanks for subscribing!
      </h1>
      <p className="thank-you-page-container__description">
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <Button text="Dismiss message" buttonType="button" />
    </div>
  );
};

export default ThankYouPage;
