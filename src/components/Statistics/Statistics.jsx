import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Title, Wrapper, List, Btn, InfoBlock } from './Statistics.styled';

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  render() {
    return (
      <section>
        <Wrapper>
          <Title>Please leave feedback</Title>
          <List>
            <li>
              <Btn>Good</Btn>
            </li>
            <li>
              <Btn>Neutral</Btn>
            </li>
            <li>
              <Btn>Bad</Btn>
            </li>
          </List>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>
                <InfoBlock>
                  Good: <span>3</span>
                </InfoBlock>
              </li>
              <li>
                <InfoBlock>
                  Neutral: <span>2</span>
                </InfoBlock>
              </li>
              <li>
                <InfoBlock>
                  Bad: <span>2</span>
                </InfoBlock>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    );
  }
}
