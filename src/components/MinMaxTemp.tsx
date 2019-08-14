import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

const BoxDiv = styled.div`
  text-align: left;
  margin: 0.3rem;
`;

interface OwnProps {
  title: string;
  unit: string;
  storeData: Weather;
  value: number | undefined;
}
interface OwnState {}

class MinMaxTemp extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv>
        {this.props.title} :<span>{this.props.value}</span>
        <span>{this.props.unit}</span>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(MinMaxTemp);
