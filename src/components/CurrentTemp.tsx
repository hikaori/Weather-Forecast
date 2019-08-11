import React, { Component } from 'react';
import styled from 'styled-components';
import fonts from '../fonts';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  .unit {
    font-size: ${fonts.middle};
  }
`;
const CurrentTempNum = styled.div`
  font-size: ${fonts.big};
`;

class CurrentTemp extends Component {
  render() {
    return (
      <BoxDiv>
        <CurrentTempNum>19</CurrentTempNum>
        <div className="unit">°C</div>
        <div className="unit">|</div>
        <div className="unit">°F</div>
      </BoxDiv>
    );
  }
}
export default CurrentTemp;
