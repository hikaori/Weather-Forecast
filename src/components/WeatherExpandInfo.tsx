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

interface OwnProps {
  rainValue?: string | number;
  windValue: number;
  humidityValue: number;
}

class WeatherExpandInfo extends Component<OwnProps> {
  render() {
    return (
      <BoxDiv>
        <ItemBoxDiv>
          rain : <div className="value">{this.props.rainValue} mm</div>
        </ItemBoxDiv>
        <ItemBoxDiv>
          wind : <div className="value">{this.props.windValue} m/s</div>
        </ItemBoxDiv>
        <ItemBoxDiv>
          humidity : <div className="value">{this.props.humidityValue} %</div>
        </ItemBoxDiv>
      </BoxDiv>
    );
  }
}
export default WeatherExpandInfo;
