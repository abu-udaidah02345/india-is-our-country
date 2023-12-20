import * as types from '../action/ActionTypes';
const initialState = {
  signupResponse: null,
  signupError: null,
};
export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_ACTION_INITIATED:
      return {
        ...state,
        signupLoading: true,
        signupSuccess: false,
        signupFailure: false,
      };
    case types.REGISTER_ACTION_FAILURE:
      return {
        ...state,
        signupLoading: false,
        signupSuccess: false,
        signupFailure: true,

        signupError: action.response,
      };
    case types.REGISTER_ACTION_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signupSuccess: true,
        signupFailure: false,

        signupResponse: action.response,
      };
    default:
      return state;
  }
}
