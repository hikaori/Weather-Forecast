import { Dispatch } from '../store';
import { AppActionType } from '../enums';
import { App } from '../entities';

export const update = (newStates: App) => async (dispatch: Dispatch) => {
  dispatch({
    type: AppActionType.Update,
    payload: { data: newStates },
  });
};
