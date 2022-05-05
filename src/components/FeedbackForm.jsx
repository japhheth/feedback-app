import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ feedbackAdd }) => {
  const [text, setText] = useState("");
  const [isBtnDisabled, setBtnIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleKeyInput = (e) => {
    setText(e.target.value);
    if (!text || text.trim().length <= 10) {
      setBtnIsDisabled(true);
      setMessage("Text must be at least 10 characters long");
      return;
    }
    setBtnIsDisabled(false);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      feedbackAdd(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleKeyInput}
          />
          <Button type="submit" version="primary" isDisabled={isBtnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
