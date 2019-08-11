/* eslint-disable import/first */
import { combineReducers, AnyAction } from 'redux';

export * from './app';
export * from './hello';

import app from './app';
import hello from './hello';
import { AppState, HelloState } from '.';

export interface Action<P> extends AnyAction {
  readonly payload: Partial<P>;
}

export interface StateMap {
  readonly app: AppState;
  readonly hello: HelloState;
}

export default combineReducers<StateMap>({
  app,
  hello,
});
