import React, { Component } from 'react';
import { WeatherMainSection, WeatherExpandInfo } from '../components';
import styled from 'styled-components';
import { WeatherAreaSection } from '../components/SectionStyle';
import fonts from '../fonts';

const CityNameDiv = styled.section`
  font-size: ${fonts.big};
`;
const WeatherDescription = styled.section`
  font-size: ${fonts.middle};
`;

class WeatherSection extends Component {
  render() {
    return (
      <WeatherAreaSection>
        <CityNameDiv>Vancouver</CityNameDiv>
        <WeatherDescription>clear sky</WeatherDescription>
        <WeatherMainSection />
        <WeatherExpandInfo />
      </WeatherAreaSection>
    );
  }
}
export default WeatherSection;
