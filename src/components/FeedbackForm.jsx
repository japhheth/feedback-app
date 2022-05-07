import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isBtnDisabled, setBtnIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const { addFeedbackHandler, feedbackEdit, updateFeedbackHandler } =
    useContext(FeedbackContext);

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
    if (!rating) return;

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedbackHandler(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedbackHandler(newFeedback);
      }
    }

    setText("");
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

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
