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
