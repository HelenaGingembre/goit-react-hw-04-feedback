import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log('onLeaveFeedback:', onLeaveFeedback);
  return (
    <BtnList>
      {options.map((option, index) => {
        const label = option.toUpperCase();
        // console.log('option:', option);

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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
