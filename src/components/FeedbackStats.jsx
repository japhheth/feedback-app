import { useEffect, useState, useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    let avg =
      feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

    avg = avg.toFixed(1).replace("/[.,]0$/", "");

    setAverage(avg);
  }, [feedback]);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
