import { Reducer } from 'redux';

import { AppActionType } from '../enums';

import { Action } from '.';
import { App } from '../entities';

export interface AppState {
  data: App;
}

export type AppAction = Action<AppState>;

const initState: AppState = {
  data: {
    inputValue: '',
    clickedUnit: 'C',
    maxTempC: 0,
    minTempC: 0,
    maxTempF: 0,
    minTempF: 0,
  },
};

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
