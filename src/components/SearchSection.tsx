import React, { Component } from 'react';
import { Button, Input } from '../components';
import { SearchAreaSection } from '../components/SectionStyle';
import { convertKtoC } from '../util/tempConverter';
import { connect } from 'react-redux';
import { weather, app } from '../actions';
import { StateMap } from '../reducers';
import { Weather, App } from '../entities';
import { Dispatch } from '../store';
import { getApi } from '../util/Api';

interface OwnProps {
  appStoreData: App;
  storeData: Weather;
  dispatch: Dispatch;
}
interface OwnState {}

class SearchSection extends Component<OwnProps, OwnState> {
  async getData() {
    const cityName = this.props.appStoreData.inputValue;
    const data = await getApi(cityName);
    await this.props.dispatch(weather.update(data));
    const maxC = await convertKtoC(this.props.storeData.main.temp_max);
    const minC = await convertKtoC(this.props.storeData.main.temp_min);
    await this.props.dispatch(
      app.update({
        ...this.props.appStoreData,
        minTempC: minC,
        maxTempC: maxC,
      }),
    );
  }
  handleClick = () => {
    this.getData();
  };

  render() {
    return (
      <SearchAreaSection>
        <Input />
        <Button onClick={this.handleClick}>Search</Button>
      </SearchAreaSection>
    );
  }
}

const mapStateToProps = (state: StateMap) => ({
  storeData: state.weather.data,
  appStoreData: state.app.data,
});

export default connect(mapStateToProps)(SearchSection);
