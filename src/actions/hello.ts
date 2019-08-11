import { HelloApi } from '../apis';
import { Dispatch } from '../store';
import { HelloActionType } from '../enums';

export const getAll = () => async (dispatch: Dispatch) => {
  const samples = await HelloApi.getAll();
  dispatch({
    type: HelloActionType.Update,
    payload: { samples },
  });
};
