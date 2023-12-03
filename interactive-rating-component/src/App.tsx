import { useState } from "react";
import { ThankYouPage } from "./components/ThankYouPage";
import { RatingScreen } from "./components/RatingScreen";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isResultsScreenShowing, setIsResultsScreenShowing] = useState(false);
  const handleSetRating = (num: number) => setSelectedRating(() => num);

  const handleSetResultsScreen = () => {
    if (selectedRating === 0) {
      alert("Please select a rating");
      return;
    }
    setIsResultsScreenShowing(true);
  };

  return (
    <main>
      {!isResultsScreenShowing ? (
        <RatingScreen
          selectedRating={selectedRating}
          handleSetResultsScreen={handleSetResultsScreen}
          handleClick={handleSetRating}
        />
      ) : (
        <ThankYouPage rating={selectedRating} />
      )}
    </main>
  );
}

export default App;
