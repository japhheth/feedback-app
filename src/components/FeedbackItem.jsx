import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa';

const FeedbackItem = ({rating, text, id, handleDelete}) => {
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button className="close" onClick={() => handleDelete(id)}><FaTimes/></button>
            <div className="text-display">{text}</div>
        </Card>
    )
}

export default FeedbackItem