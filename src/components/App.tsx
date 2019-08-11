import React, { Component } from 'react';
import { SearchSection, WeatherSection } from '../components';
import styled from 'styled-components';
import { media } from '../util/Helper';
const FlexDiv = styled.div`
  display: flex;
  padding: 10%;
  ${media.phone`
    flex-direction: column;
    box-sizing: border-box;
  `}
`;

class App extends Component {
  render() {
    return (
      <FlexDiv>
        <SearchSection />
        <WeatherSection />
      </FlexDiv>
    );
  }
}
export default App;
