import { Reducer } from 'redux';

import { AppActionType } from '../enums';

import { Action } from '.';

export interface AppState {}

export type AppAction = Action<AppState>;

const initState: AppState = {};

const reducer: Reducer<AppState, AppAction> = (
  state: AppState = initState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case AppActionType.Update:
      return { ...state, ...action.payload };
  }
  return state;
};
export default reducer;
