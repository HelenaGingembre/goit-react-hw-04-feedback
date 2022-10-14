import React from 'react';
import PropTypes from 'prop-types';

import { InfoList, InfoItem, InfoBlock } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  //   const list = ['good', 'neutral', 'bad', 'total', 'positivePercentage'];
  return (
    <InfoList>
      {/* {list.map((item, index) => {
        const labelItem =
          item.split('')[0].toUpperCase() + item.split('').slice(1).join('');

        return (
          <InfoItem key={index}>
            <InfoBlock>
              {labelItem}: <span>{item}</span>
            </InfoBlock>
          </InfoItem>
        );
      })} */}
      <InfoItem>
        <InfoBlock>
          Good: <span>{good}</span>
        </InfoBlock>
      </InfoItem>

      <InfoItem>
        <InfoBlock>
          Neutral: <span>{neutral}</span>
        </InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoBlock>
          Bad: <span>{bad}</span>
        </InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoBlock>
          Total: <span>{total}</span>
        </InfoBlock>
      </InfoItem>
      <InfoItem>
        <InfoBlock>
          Positive feedback: <span>{positivePercentage}%</span>
        </InfoBlock>
      </InfoItem>
    </InfoList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
