import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
import {
  PageSection,
  // Wrapper,
  Title,
  BtnList,
  Btn,
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

  countPositiveFeedbackPercentage() {}

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
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
            <ul>
              <li>
                <InfoBlock>
                  Good: <span>{good}</span>
                </InfoBlock>
              </li>
              <li>
                <InfoBlock>
                  Neutral: <span>{neutral}</span>
                </InfoBlock>
              </li>
              <li>
                <InfoBlock>
                  Bad: <span>{bad}</span>
                </InfoBlock>
              </li>
              <li>
                <InfoBlock>
                  Total: <span>{total}</span>
                </InfoBlock>
              </li>
            </ul>
          ) : (
            'There is no feedback'
          )}
        </PageSection>
      </>
    );
  }
}
