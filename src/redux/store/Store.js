import Reducers from '../reducer';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const rootReducer = combineReducers({
  // ... Other reducers here
  ...Reducers,
});
const middleware = [thunk];

export const Store = createStore(rootReducer, applyMiddleware(...middleware));
