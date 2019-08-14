import React, { Component } from 'react';
import classNames from 'classnames';
import { convertKtoC, convertKtoF } from '../util/tempConverter';
import styled from 'styled-components';
import fonts from '../fonts';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather, App } from '../entities';
import { app } from '../actions';

import { Dispatch } from '../store';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  .unit {
    font-size: ${fonts.middle};
    color: #ccc;
  }
  .unit.clicked {
    color: #000;
  }
`;
const CurrentTempNum = styled.div`
  font-size: ${fonts.big};
`;

interface OwnProps {
  storeData: Weather;
  AppAtoreData: App;
  dispatch: Dispatch;
}
interface OwnState {
  isClicked: string;
}

class CurrentTemp extends Component<OwnProps, OwnState> {
  constructor(ownProps: OwnProps, ownState: OwnState) {
    super(ownProps, ownState);
    this.state = {
      isClicked: 'C',
    };
  }

  handleClick = (unit: string) => {
    this.setState({
      isClicked: unit,
    });
    let maxC;
    let minC;
    let maxF;
    let minF;
    let clickedUnit = 'C';
    if (unit === 'C') {
      maxC = convertKtoC(this.props.storeData.main.temp_max);
      minC = convertKtoC(this.props.storeData.main.temp_min);
      clickedUnit = 'C';
    } else if (unit === 'F') {
      maxF = convertKtoF(this.props.storeData.main.temp_max);
      minF = convertKtoF(this.props.storeData.main.temp_min);
      clickedUnit = 'F';
    }
    this.props.dispatch(
      app.update({
        ...this.props.AppAtoreData,
        maxTempC: maxC,
        minTempC: minC,
        maxTempF: maxF,
        minTempF: minF,
        clickedUnit: clickedUnit,
      }),
    );
  };

  render() {
    return (
      <BoxDiv>
        <CurrentTempNum>
          {this.state.isClicked === 'C'
            ? convertKtoC(this.props.storeData.main.temp)
            : convertKtoF(this.props.storeData.main.temp)}
        </CurrentTempNum>
        <div
          className={classNames('unit', {
            clicked: this.state.isClicked === 'C',
          })}
          onClick={() => this.handleClick('C')}
        >
          °C
        </div>
        <div className="unit">|</div>
        <div
          className={classNames('unit', {
            clicked: this.state.isClicked === 'F',
          })}
          onClick={() => this.handleClick('F')}
        >
          °F
        </div>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
  AppAtoreData: state.app.data,
});

export default connect(mapStateToProps)(CurrentTemp);
