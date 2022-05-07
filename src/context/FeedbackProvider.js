import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { FeedbackContext } from "./FeedbackContext";

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 8,
      text: "This is feedback item 1",
    },
    {
      id: 2,
      rating: 10,
      text: "This is feedback item 2",
    },
    {
      id: 3,
      rating: 4,
      text: "This is feedback item 3",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const deleteFeedbackHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedbackHandler = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackHandler = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedbackHandler,
        addFeedbackHandler,
        editFeedbackHandler,
        feedbackEdit,
        updateFeedbackHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
