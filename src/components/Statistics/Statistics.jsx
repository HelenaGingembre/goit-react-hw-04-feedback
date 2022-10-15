import React from 'react';
import PropTypes from 'prop-types';

import { InfoList, InfoItem, InfoBlock } from './Statistics.styled';

export const Statistics = props => {
  // const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <InfoList>
      {Object.keys(props).map((item, index) => {
        return (
          <InfoItem key={index}>
            <InfoBlock>
              {item}: <span>{props[item]}</span>
            </InfoBlock>
          </InfoItem>
        );
      })}
    </InfoList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
