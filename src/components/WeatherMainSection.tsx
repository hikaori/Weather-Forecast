import React, { Component } from 'react';
import { CurrentTemp, MinMaxTemp } from '../components';
import cosLogo from '../assets/imgs/Sun.png';
import styled from 'styled-components';
import { media } from '../util/Helper';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    ${media.phone`height: 120px;`}
  }
`;

class WeatherMainSection extends Component {
  render() {
    return (
      <BoxDiv>
        <div>
          <img src={cosLogo} alt={''} height="150px" />
        </div>
        <div>
          <CurrentTemp />
          <MinMaxTemp />
          <MinMaxTemp />
        </div>
      </BoxDiv>
    );
  }
}
export default WeatherMainSection;
