import React, { Component } from 'react';
import { CurrentTemp, MinMaxTemp } from '../components';
import cosLogo from '../assets/imgs/Sun.png';
import styled from 'styled-components';
import { media } from '../util/Helper';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    ${media.phone`height: 120px;`}
  }
`;

interface OwnProps {
  storeData: Weather;
}
interface OwnState {}

class WeatherMainSection extends Component<OwnProps, OwnState> {
  render() {
    const data = this.props.storeData;
    return (
      <BoxDiv>
        <div>
          <img src={cosLogo} alt={''} height="150px" />
        </div>
        <div>
          <CurrentTemp />
          <MinMaxTemp value={data.main.temp_max} />
          <MinMaxTemp value={data.main.temp_min} />
        </div>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(WeatherMainSection);
