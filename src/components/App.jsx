import React, { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

let countTotalFeedback = 0;
let positiveFeedbackPercentage = 0;

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = options => {
    switch (options) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    countTotalFeedback = Number(good) + Number(neutral) + Number(bad);
    console.log('countTotalFeedback', typeof countTotalFeedback);
    positiveFeedbackPercentage =
      Math.round((Number(good) / countTotalFeedback) * 100) + '%';

    console.log('positiveFeedback', positiveFeedbackPercentage + `з ${good}`);
    // !Number.isNaN(positiveFeedbackPercentage) ? positiveFeedbackPercentage : 0;
    // console.log('positiveFeedback', positiveFeedbackPercentage);
  }, [good, neutral, bad]);

  useEffect(() => {}, [good, neutral, bad]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positive={positiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
