import React, { Component } from 'react';
import { SearchSection, WeatherSection } from '.';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { hello } from '../actions';
import { StateMap } from '../reducers';
import { Sample } from '../entities';
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
  samples: Sample[];
  dispatch: Dispatch;
}

class BaseContainer extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(hello.getAll());
  }
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
  samples: state.hello.samples,
});

export default connect(mapStateToProps)(BaseContainer);
