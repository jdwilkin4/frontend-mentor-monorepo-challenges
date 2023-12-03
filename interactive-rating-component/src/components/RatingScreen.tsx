import { RATINGS } from "../constants";
import clsx from "clsx";
import "./RatingScreen.scss";

type RatingScreenProps = {
  handleClick: (num: number) => void;
  handleSetResultsScreen: () => void;
  selectedRating: number;
};

export function RatingScreen({
  handleClick,
  handleSetResultsScreen,
  selectedRating,
}: RatingScreenProps) {
  return (
    <form className="rating-container">
      <img
        className="rating-container__star-icon"
        src="/images/icon-star.svg"
        alt=""
      />
      <h1 className="rating-container__main-question">How did we do?</h1>
      <p className="rating-container__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container__ratings">
        {RATINGS.map(({ id, rating }) => (
          <button
            onClick={() => handleClick(rating)}
            className={clsx(
              "rating-container__ratings__rating-btn",
              selectedRating === rating && "selected-rating"
            )}
            key={id}
            type="button"
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        onClick={handleSetResultsScreen}
        className="rating-container__submit-btn"
      >
        Submit
      </button>
    </form>
  );
}
