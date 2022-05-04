import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem";


const FeedbackList = ({ feedback, deleteHandler }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem rating={item.rating} text={item.text} key={item.id} id={item.id} handleDelete={deleteHandler}/>
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string
    })
  )
}

export default FeedbackList;
