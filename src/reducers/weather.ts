import { Reducer } from 'redux';

import { WeatherActionType } from '../enums';

import { Action } from '.';
import { Weather } from '../entities';

export interface WeatherState {
  data: Weather;
}

export type WeatherAction = Action<WeatherState>;

const initState: WeatherState = {
  data: {
    weather: [
      {
        id: 0,
        main: '',
        description: '',
      },
    ],
    main: {
      temp: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
    },
    wind: {
      speed: 0,
    },
    name: '',
  },
};

const reducer: Reducer<WeatherState, WeatherAction> = (
  state: WeatherState = initState,
  action: WeatherAction,
): WeatherState => {
  switch (action.type) {
    case WeatherActionType.Update:
      return { ...state, ...action.payload };
  }
  return state;
};
export default reducer;
