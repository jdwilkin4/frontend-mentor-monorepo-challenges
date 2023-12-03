import "./ThankYouPage.scss";

type ThankYouPageProps = {
  rating: number;
};

export function ThankYouPage({ rating }: ThankYouPageProps) {
  return (
    <div className="thank-you-container">
      <img
        className="thank-you-container__receipt-machine"
        src="/images/illustration-thank-you.svg"
        alt="electronic receipt machine"
      />
      <p className="thank-you-container__rating-result">
        You selected{" "}
        <span className="thank-you-container__rating-result__user-rating">
          {rating}
        </span>{" "}
        out of 5
      </p>
      <h1 className="thank-you-container__heading">Thank you!</h1>
      <p className="thank-you-container__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
}
