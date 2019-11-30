import { Creators } from './actions';
import axios from 'axios';
import { API_URL } from '../constants';
const joinSessionRequestAction = Creators.joinSessionRequest;
const joinSessionSuccessAction = Creators.joinSessionSuccess;
const joinSessionFailureAction = Creators.joinSessionFailure;
const getQuestionRequestAction = Creators.getQuestionRequest;
const getQuestionSuccessAction = Creators.getQuestionSuccess;
const getQuestionFailureAction = Creators.getQuestionFailure;
const sendAnswerRequestAction = Creators.sendAnswerRequest;
const sendAnswerSuccessAction = Creators.sendAnswerSuccess;
const sendAnswerFailureAction = Creators.sendAnswerFailure;

const joinSession = (sessionid) => {
  return async dispatch => {
    dispatch(joinSessionRequestAction(sessionid));
		try {
			await axios.get(`${API_URL}session/join`);
			dispatch(joinSessionSuccessAction({status: 'success'}, sessionid));
		} catch {
			dispatch(joinSessionFailureAction({status: 'falied'}));
		}
  }
};

const getQuestion = (sessionid) => {
	return async dispatch => {
		dispatch(getQuestionRequestAction(sessionid));
		try {
			const challenge = await axios.get(`${API_URL}questions`);
			dispatch(getQuestionSuccessAction(challenge.data));
		} catch (err) {
			dispatch(getQuestionFailureAction({msg: err}));
		}
	}
};

const sendAnswer = (sessionid, questionid, correct) => {
	return async dispatch => {
		dispatch(sendAnswerRequestAction(sessionid));
		try {
			const params = { 'questionid': questionid, 'correct': correct };
			const response = await axios.get(`${API_URL}answer`, params);
			dispatch(sendAnswerSuccessAction(response));
		} catch (err) {
			dispatch(sendAnswerFailureAction({msg: err}));
		}
	}
};


export default {
	joinSession,
	getQuestion,
	sendAnswer
};
