import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import COUNTRIES from '../constants/country';
import './input.css';
import { connect } from 'react-redux';
import { StateMap } from '../reducers';
import { app } from '../actions';
import { App } from '../entities';
import { Dispatch } from '../store';

interface OwnProps {
  appstoreData: App;
  dispatch: Dispatch;
}
interface OwnState {
  value: string;
  suggestions: [];
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value: string): any => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : COUNTRIES.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue,
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: any) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

class Input extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event: any, { newValue }: any) => {
    this.setState({
      value: newValue,
    });
    this.props.dispatch(
      app.update({ ...this.props.appstoreData, inputValue: newValue }),
    );
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter City Name',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
const mapStateToProps = (state: StateMap) => ({
  appstoreData: state.app.data,
});
export default connect(mapStateToProps)(Input);
