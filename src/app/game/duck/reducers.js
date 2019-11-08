//reducers.js
import { createReducer } from 'reduxsauce';
import types from './types';
import { GAME_STATES } from '../constants';

const INITIAL_STATE = {
  gameState: GAME_STATES.JOIN_STATE, 
  sessionid: '',
  showSpinner: false
};

const joinSessionRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    showSpinner: true
  }
};

const joinSessionSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    sessionid: action.sessionid,
    gameState: GAME_STATES.QUESTION_STATE,
    showSpinner: false
  }
};

const joinSessionFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state
  }
};

const HANDLERS = {
  [types.JOIN_SESSION_REQUEST]: joinSessionRequest,
  [types.JOIN_SESSION_FAILURE]: joinSessionFailure,
  [types.JOIN_SESSION_SUCCESS]: joinSessionSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS);
