import * as types from './ActionTypes';

import {register} from '../apiservice/ApiList';

import authApi from '../apiservice/ApiService';

export function signupActionCall(params) {
  return function (dispatch) {
    dispatch(signupActionPending());
    return authApi
      .postRequest(register, params)
      .then(response => {
        dispatch(signupActionSuccess(response));
      })
      .catch(error => {
        //    LocalStorage.ShowAlert('Alert!', error?.messege);
        dispatch(signupActionFailure(error));
      });
  };
}

export function signupActionPending() {
  return {
    type: types.REGISTER_ACTION_INITIATED,
  };
}
export function signupActionSuccess(response) {
  return {
    type: types.REGISTER_ACTION_SUCCESS,
    response,
  };
}
export function signupActionFailure() {
  return {
    type: types.REGISTER_ACTION_FAILURE,
  };
}
