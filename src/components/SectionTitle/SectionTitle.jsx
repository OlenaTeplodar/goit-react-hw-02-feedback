import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

const SectionTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

export default SectionTitle;

// SectionTitle.PropTypes = {
//   Title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };
