import { useState } from "react";
import { RatingScreen } from "./components/RatingScreen";
import { ThankYouPage } from "./components/ThankYouPage";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <RatingScreen />
      {/* <ThankYouPage rating={rating} /> */}
    </>
  );
}

export default App;
