import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((option, index) => {
        const label =
          option.split('')[0].toUpperCase() +
          option.split('').slice(1).join('');

        return (
          <li key={index}>
            <Btn onClick={() => onLeaveFeedback(option)}>{label}</Btn>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
