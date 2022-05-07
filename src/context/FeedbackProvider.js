import { useState, useEffect } from "react";
import { FeedbackContext } from "./FeedbackContext";

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // Fetch feedback
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=rating&_order=asc");
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedbackHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback ?")) {
      const response = await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!Object.entries(data).length) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }
  };

  const addFeedbackHandler = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const editFeedbackHandler = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackHandler = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
