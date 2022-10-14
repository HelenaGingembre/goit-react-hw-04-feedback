import PropTypes from 'prop-types';
import { SectionPage, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionPage>
      {title && <Title>{title}</Title>}
      {children}
    </SectionPage>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
