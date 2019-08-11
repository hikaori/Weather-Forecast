import { Reducer } from 'redux';

import { HelloActionType } from '../enums';

import { Action } from '.';
import { Sample } from '../entities';

export interface HelloState {
  samples: Sample[];
}

export type HelloAction = Action<HelloState>;

const initState: HelloState = {
  samples: [],
};

const reducer: Reducer<HelloState, HelloAction> = (
  state: HelloState = initState,
  action: HelloAction,
): HelloState => {
  switch (action.type) {
    case HelloActionType.Update:
      return { ...state, ...action.payload };
  }
  return state;
};
export default reducer;
