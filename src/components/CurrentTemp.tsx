import React, { Component } from 'react';
import styled from 'styled-components';
import fonts from '../fonts';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

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

interface OwnProps {
  storeData: Weather;
}
interface OwnState {}

class CurrentTemp extends Component<OwnProps, OwnState> {
  render() {
    const data = this.props.storeData;
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
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(CurrentTemp);
