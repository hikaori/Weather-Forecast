import { Dispatch } from '../store';
import { WeatherActionType } from '../enums';
import { Weather } from '../entities';

export const update = (newStates: Weather) => async (dispatch: Dispatch) => {
  dispatch({
    type: WeatherActionType.Update,
    payload: { data: newStates },
  });
};
