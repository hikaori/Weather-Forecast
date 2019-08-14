import React, { Component, Fragment } from 'react';
import { CurrentTemp, MinMaxTemp, WeatherImg } from '../components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather, App } from '../entities';

const BoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface OwnProps {
  storeData: Weather;
  appStoreData: App;
}
interface OwnState {}

class WeatherMainSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv>
        <WeatherImg />
        <div>
          <CurrentTemp />
          {this.props.appStoreData.clickedUnit === 'C' ? (
            <Fragment>
              <MinMaxTemp
                value={this.props.appStoreData.maxTempC}
                title={'max'}
                unit={'°C'}
              />
              <MinMaxTemp
                value={this.props.appStoreData.minTempC}
                title={'min'}
                unit={'°C'}
              />
            </Fragment>
          ) : (
            <Fragment>
              <MinMaxTemp
                value={this.props.appStoreData.maxTempF}
                title={'max'}
                unit={'°F'}
              />
              <MinMaxTemp
                value={this.props.appStoreData.minTempF}
                title={'min'}
                unit={'°F'}
              />
            </Fragment>
          )}
        </div>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
  appStoreData: state.app.data,
});

export default connect(mapStateToProps)(WeatherMainSection);
