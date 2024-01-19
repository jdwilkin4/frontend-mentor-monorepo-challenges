import "../styles/MobileCard.scss";

type MobileCardProps = {
  activityImg: string;
  timeFrame: string;
  activity: string;
  currentTime: number;
  previousTime: number;
};

export const MobileCard = ({
  activity,
  activityImg,
  timeFrame,
  currentTime,
  previousTime,
}: MobileCardProps) => {
  return (
    <div className="card">
      <img src={activityImg} alt="" />
      <div className="card__info-container">
        <div className="card__info-container__activity-container">
          <p className="card__info-container__activity-container__activity">
            {activity}
          </p>
          <button className="card__info-container__activity-container__ellipsis">
            <img src="/images/icon-ellipsis.svg" alt="ellipsis" />
          </button>
        </div>
        <div className="card__info-container__time-container">
          <p className="card__info-container__time-container__time">
            {currentTime}
          </p>
          <p className="card__info-container__time-container__time-frequency">
            {timeFrame} - {previousTime}hrs
          </p>
        </div>
      </div>
    </div>
  );
};
