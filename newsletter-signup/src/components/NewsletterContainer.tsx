import { ChangeEvent } from "react";
import Button from "./Button";
import clsx from "clsx";
import "./NewsletterContainer.scss";

type InputEvent = ChangeEvent<HTMLInputElement>;

type NewsletterContainerProps = {
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
  handleSubmit: (e: any) => void;
  isEmailInvalid: boolean;
};

const NewsletterContainer = ({
  userEmail,
  setUserEmail,
  handleSubmit,
  isEmailInvalid,
}: NewsletterContainerProps) => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-container__signup">
        <h1 className="newsletter-container__signup__title">Stay updated!</h1>
        <p className="newsletter-container__signup__description">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="newsletter-container__signup__value-prop-list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="newsletter-container__signup__message-div">
            <label htmlFor="signup">Email address</label>
            {isEmailInvalid && (
              <p className="newsletter-container__signup__message-div__invalid-msg">
                Valid email required
              </p>
            )}
          </div>
          <input
            value={userEmail}
            className={clsx({
              "newsletter-container__signup__input--invalid": isEmailInvalid,
              "newsletter-container__signup__input": !isEmailInvalid,
            })}
            required
            name="email-signup"
            id="signup"
            placeholder="email@company.com"
            onChange={(e: InputEvent) => setUserEmail(e.target.value)}
          />
          <Button text="Subscribe to monthly newsletter" buttonType="submit" />
        </form>
      </div>
      <div className="newsletter-container__img-container">
        <picture>
          <source
            className="newsletter-container__img-container__desktop-img"
            srcSet="/illustration-sign-up-desktop.svg"
            media="(min-width: 768px)"
          />
          <img
            className="newsletter-container__img-container__mobile-img"
            src="/illustration-sign-up-mobile.svg"
            alt="newsletter illustration"
          />
        </picture>
      </div>
    </div>
  );
};

export default NewsletterContainer;
