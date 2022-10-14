import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Title, Wrapper } from './Statistics.styled';

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
          <ul>
            <li>
              <button>Good</button>
            </li>
            <li>
              <button>Neutral</button>
            </li>
            <li>
              <button>Bad</button>
            </li>
          </ul>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>
                <p>
                  Good: <span>3</span>
                </p>
              </li>
              <li>
                <p>
                  Neutral: <span>2</span>
                </p>
              </li>
              <li>
                <p>
                  Bad: <span>2</span>
                </p>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    );
  }
}
