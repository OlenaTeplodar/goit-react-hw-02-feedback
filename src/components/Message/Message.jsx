import PropTypes from 'prop-types';
import { MessageText } from './Message.styled';

 const Message = ({ text }) => {
  return <MessageText>{text}</MessageText>;
};

export default Message;

// Message.PropTypes = {
//   text: PropTypes.string.isRequired,
// };
