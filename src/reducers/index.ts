/* eslint-disable import/first */
import { combineReducers, AnyAction } from 'redux';

export * from './app';
export * from './weather';

import app from './app';
import weather from './weather';
import { AppState, WeatherState } from '.';

export interface Action<P> extends AnyAction {
  readonly payload: Partial<P>;
}

export interface StateMap {
  readonly app: AppState;
  readonly weather: WeatherState;
}

export default combineReducers<StateMap>({
  app,
  weather,
});
