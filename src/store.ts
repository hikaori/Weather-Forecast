import thunk, { ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware, AnyAction } from 'redux';

import rootReducer, {
  AppAction,
  AppState,
  HelloState,
  HelloAction,
} from './reducers';

type DispatchWrapper<Props extends AnyAction, State> = ThunkDispatch<
  State,
  undefined,
  Props
>;

type AppDispatch = DispatchWrapper<AppAction, AppState>;
type HelloDispatch = DispatchWrapper<HelloAction, HelloState>;

export type Dispatch = AppDispatch & HelloDispatch;

export default createStore(rootReducer, applyMiddleware(thunk));
