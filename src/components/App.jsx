import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

import {
  Title,
  BtnList,
  Btn,
  InfoList,
  InfoItem,
  InfoBlock,
} from './Statistics/Statistics.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalValues = Object.values(this.state);
    return totalValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const percentFeedbackPositive = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onClick={this.handleClick} />
        </Section>
        {/* <Statistics></Statistics> */}
        <Section title="Statistics">
          {total > 0 ? (
            <InfoList>
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
                  Positive feedback: <span>{percentFeedbackPositive}%</span>
                </InfoBlock>
              </InfoItem>
            </InfoList>
          ) : (
            'There is no feedback'
          )}
        </Section>
      </>
    );
  }
}
