import React, { Component } from 'react';
import { WeatherMainSection, WeatherExpandInfo } from '../components';
import styled from 'styled-components';
import { WeatherAreaSection } from '../components/SectionStyle';
import fonts from '../fonts';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

const CityNameDiv = styled.section`
  font-size: ${fonts.big};
`;
const WeatherDescription = styled.section`
  font-size: ${fonts.middle};
`;

interface OwnProps {
  storeData: Weather;
}
interface OwnState {}

class WeatherSection extends Component<OwnProps, OwnState> {
  render() {
    const data = this.props.storeData;
    return (
      <WeatherAreaSection>
        <CityNameDiv>{data.name ? data.name : 'CityName'}</CityNameDiv>
        <WeatherDescription>
          {data.weather[0].main ? data.weather[0].main : '...'}
        </WeatherDescription>
        <WeatherMainSection />
        <WeatherExpandInfo
          rainValue={data.rein ? data.rein : '-'}
          windValue={data.wind.speed}
          humidityValue={data.main.humidity}
        />
      </WeatherAreaSection>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(WeatherSection);
