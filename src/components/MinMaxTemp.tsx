import React, { Component } from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  text-align: left;
  margin: 0.3rem;
`;

class MinMaxTemp extends Component {
  render() {
    return (
      <BoxDiv>
        min :<span>15</span>
        <span>C</span>
      </BoxDiv>
    );
  }
}
export default MinMaxTemp;
