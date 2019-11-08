import { combineReducers } from 'redux';
import homeReducer from './app/game/duck';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
