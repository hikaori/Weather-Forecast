import React, { Component } from 'react';
import { BaseContainer } from '../components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BaseContainer />
      </Provider>
    );
  }
}
export default App;
