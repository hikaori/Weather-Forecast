import thunk, { ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware, AnyAction } from 'redux';

import rootReducer, {
  AppAction,
  AppState,
  WeatherAction,
  WeatherState,
} from './reducers';

type DispatchWrapper<Props extends AnyAction, State> = ThunkDispatch<
  State,
  undefined,
  Props
>;

type AppDispatch = DispatchWrapper<AppAction, AppState>;
type WeatherDispatch = DispatchWrapper<WeatherAction, WeatherState>;

export type Dispatch = AppDispatch & WeatherDispatch;

export default createStore(rootReducer, applyMiddleware(thunk));
