import PropTypes from 'prop-types';
import { Title, Container, Dotted } from './SectionTitle.styled';

const SectionTitle = ({ text, children }) => {
  return (
    <Container>
      <Dotted>
        <Title>{text}</Title>
        {children}
      </Dotted>
    </Container>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  Title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
