import React, { Component } from 'react';
import { SearchSection, WeatherSection } from '.';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Dispatch } from '../store';
import { media } from '../util/Helper';
const FlexDiv = styled.div`
  display: flex;
  padding: 10%;
  ${media.phone`
    flex-direction: column;
    box-sizing: border-box;
  `}
`;

interface Props {
  dispatch: Dispatch;
}

class BaseContainer extends Component<Props> {
  render() {
    return (
      <FlexDiv>
        <SearchSection />
        <WeatherSection />
      </FlexDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(BaseContainer);
