//reducers.js
import { createReducer } from 'reduxsauce';
import types from './types';
import { GAME_STATES } from '../constants';

const INITIAL_STATE = {
  gameState: GAME_STATES.JOIN_STATE, 
  sessionid: '',
	challenge: '',
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
    gameState: GAME_STATES.WAITING_FOR_QUESTION_STATE,
    showSpinner: false
  }
};

const joinSessionFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state
  }
};

const getQuestionRequest = (state = INITIAL_STATE, action) => {
	return {
		...state
	}
};

const getQuestionSuccess = (state = INITIAL_STATE, action) => {
	console.log(action);
	return {
		...state,
		challenge: action.challenge,
		gameState: GAME_STATES.QUESTION_STATE,
		showSpinner: false
	}
};

const getQuestionFailure = (state = INITIAL_STATE, action) => {
	return {
		...state
	}
};

const sendAnswerRequest = (state = INITIAL_STATE, action) => {
	return {
		...state
	}
};

const sendAnswerSuccess = (state = INITIAL_STATE, action) => {
	console.log(action);
	return {
		...state,
		challenge: action.challenge,
		gameState: GAME_STATES.QUESTION_STATE,
		showSpinner: false
	}
};

const sendAnswerFailure = (state = INITIAL_STATE, action) => {
	return {
		...state
	}
};
const HANDLERS = {
  [types.JOIN_SESSION_REQUEST]: joinSessionRequest,
  [types.JOIN_SESSION_FAILURE]: joinSessionFailure,
  [types.JOIN_SESSION_SUCCESS]: joinSessionSuccess,
	[types.GET_QUESTION_REQUEST]: getQuestionRequest,
  [types.GET_QUESTION_SUCCESS]: getQuestionSuccess,
	[types.GET_QUESTION_FAILURE]: getQuestionFailure,
	[types.SEND_ANSWER_REQUEST]: sendAnswerRequest,
	[types.SEND_ANSWER_SUCCESS]: sendAnswerSuccess,
	[types.SEND_ANSWER_FAILURE]: sendAnswerFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);
