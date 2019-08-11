import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../util/Helper';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  .item-box {
    margin: 0 0.8rem;
  }
`;
const ItemBoxDiv = styled.div`
  margin: 0 0.8rem;
  .value {
    display: inline;
    ${media.phone`display:block;`}
  }
`;

class WeatherExpandInfo extends Component {
  render() {
    return (
      <BoxDiv>
        <ItemBoxDiv>
          rain : <div className="value">5 mm</div>
        </ItemBoxDiv>
        <ItemBoxDiv>
          wind : <div className="value">5 m/s</div>
        </ItemBoxDiv>
        <ItemBoxDiv>
          humidity : <div className="value">96 %</div>
        </ItemBoxDiv>
      </BoxDiv>
    );
  }
}
export default WeatherExpandInfo;
