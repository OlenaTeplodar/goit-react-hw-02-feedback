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
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
