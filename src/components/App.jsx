import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
import {
  PageSection,
  // Wrapper,
  Title,
  List,
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

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <PageSection>
          <Title>Please leave feedback</Title>
          <List>
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
          </List>
        </PageSection>
        {/* <Statistics></Statistics> */}
        <PageSection>
          <h2>Statistics</h2>
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
          </ul>
        </PageSection>
      </>
    );
  }
}
