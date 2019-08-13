import React, { Component } from 'react';
import { CurrentTemp, MinMaxTemp, WeatherImg } from '../components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <WeatherImg />
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
