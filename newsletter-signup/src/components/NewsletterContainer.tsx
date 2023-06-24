import Button from "./Button";

const NewsletterContainer = () => {
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
        <form action="">
          <label htmlFor="signup">Email address</label>
          <input
            className="newsletter-container__signup__input"
            required
            type="email"
            name="email-signup"
            id="signup"
            placeholder="email@company.com"
          />
          <Button text=" Subscribe to monthly newsletter" buttonType="submit" />
        </form>
      </div>
      <div className="newsletter-container__img-container">
        <picture>
          <source
            className="newsletter-container__img-container__desktop-img"
            srcSet="./src/assets/images/illustration-sign-up-desktop.svg"
            media="(min-width: 768px)"
          />
          <img
            className="newsletter-container__img-container__mobile-img"
            src="./src/assets/images/illustration-sign-up-mobile.svg"
            alt="newsletter illustration"
          />
        </picture>
      </div>
    </div>
  );
};

export default NewsletterContainer;
