import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
import {
  PageSection,
  // Wrapper,
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
        <PageSection>
          <Title>Please leave feedback</Title>
          <BtnList>
            {options.map((option, index) => {
              const label =
                option.split('')[0].toUpperCase() +
                option.split('').slice(1).join('');

              return (
                <li key={index}>
                  <Btn onClick={() => this.handleClick(option)}>{label}</Btn>
                </li>
              );
            })}
          </BtnList>
        </PageSection>
        {/* <Statistics></Statistics> */}
        <PageSection>
          <h2>Statistics</h2>
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
        </PageSection>
      </>
    );
  }
}
