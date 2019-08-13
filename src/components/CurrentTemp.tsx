import React, { Component } from 'react';
import classNames from 'classnames';
import { convertKtoD, convertKtoF } from '../util/tempConverter';
import styled from 'styled-components';
import fonts from '../fonts';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';
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
  dispatch: Dispatch;
}
interface OwnState {
  isDClicked: boolean;
}

class CurrentTemp extends Component<OwnProps, OwnState> {
  constructor(ownProps: OwnProps, ownState: OwnState) {
    super(ownProps, ownState);
    this.state = {
      isDClicked: true,
    };
  }

  handleClickD = () => {
    this.setState({
      isDClicked: true,
    });
  };

  handlelickF = () => {
    this.setState({
      isDClicked: false,
    });
  };

  render() {
    return (
      <BoxDiv>
        <CurrentTempNum>
          {this.state.isDClicked
            ? convertKtoD(this.props.storeData.main.temp)
            : convertKtoF(this.props.storeData.main.temp)}
        </CurrentTempNum>
        <div
          className={classNames('unit', { clicked: this.state.isDClicked })}
          onClick={this.handleClickD}
        >
          °C
        </div>
        <div className="unit">|</div>
        <div
          className={classNames('unit', { clicked: !this.state.isDClicked })}
          onClick={this.handlelickF}
        >
          °F
        </div>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(CurrentTemp);
