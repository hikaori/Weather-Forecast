import React, { Component } from 'react';
import { Button, Input } from '../components';
import { SearchAreaSection } from '../components/SectionStyle';
import { connect } from 'react-redux';
import { weather } from '../actions';
import { StateMap } from '../reducers';
import { Weather } from '../entities';
import { Dispatch } from '../store';
import { getApi } from '../util/Api';

interface OwnProps {
  storeData: Weather;
  dispatch: Dispatch;
}
interface OwnState {}

class SearchSection extends Component<OwnProps, OwnState> {
  async getData() {
    const data = await getApi('Lindon');
    this.props.dispatch(weather.update(data));
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
});

export default connect(mapStateToProps)(SearchSection);
