import { useState } from "react";
import { MobileCard } from "./components/MobileCard";
import { CARD_IMG_ARRAY } from "./constants";
import * as data from "../data.json";
import "./App.scss";

type TimeFrameType = "daily" | "weekly" | "monthly";

function App() {
  const [timeframe, setTimeframe] = useState<TimeFrameType>("weekly");

  return (
    <>
      {data.default.map(
        (
          { title, timeframes }: { title: string; timeframes: any },
          index: number
        ) => (
          <div key={title}>
            <MobileCard
              activityImg={CARD_IMG_ARRAY[index]}
              timeFrame={timeframe}
              activity={title}
              currentTime={timeframes[timeframe].current}
              previousTime={timeframes[timeframe].previous}
            />
          </div>
        )
      )}
    </>
  );
}

export default App;
