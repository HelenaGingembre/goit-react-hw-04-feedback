import React from 'react';
import PropTypes from 'prop-types';

import { InfoList, InfoItem, InfoBlock, SpanText } from './Statistics.styled';

export const Statistics = props => {
  return (
    <InfoList>
      {Object.keys(props).map((item, index) => {
        // console.log(item);
        return (
          <InfoItem key={index}>
            <InfoBlock>
              <SpanText>
                {item === 'positive' ? 'Positive Feedback' : item}:
              </SpanText>
              <span>{props[item]}</span>
            </InfoBlock>
          </InfoItem>
        );
      })}
    </InfoList>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
