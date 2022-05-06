import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackList from "../components/FeedbackList";
import FeedbackData from "../data/FeedbackData";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div>
      <FeedbackForm feedbackAdd={addFeedbackHandler} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
    </div>
  );
};

export default HomePage;
