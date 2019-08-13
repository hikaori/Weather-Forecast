import React, { Component } from 'react';
import styled from 'styled-components';
import { getImg, getImgName } from '../util/getImgData';
import defaultImg from '../assets/imgs/default.png';
import { media } from '../util/Helper';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { Weather } from '../entities';

const BoxDiv = styled.div`
  img {
    ${media.phone`height: 120px;`}
  }
`;

interface OwnProps {
  storeData: Weather;
}
interface OwnState {}

class WeatherImg extends Component<OwnProps, OwnState> {
  createImg() {
    const imgName = getImgName(this.props.storeData.weather[0].id);
    console.log(imgName);
    return getImg(imgName);
  }
  render() {
    return (
      <BoxDiv>
        <div>
          <img
            src={
              this.props.storeData.weather[0].description !== ''
                ? this.createImg()
                : defaultImg
            }
            alt={''}
            height="150px"
          />
        </div>
      </BoxDiv>
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
});

export default connect(mapStateToProps)(WeatherImg);
