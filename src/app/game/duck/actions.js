// actions.js
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  joinSessionRequest: ['sessionid'],
  joinSessionSuccess: ['sessionData', 'sessionid'],
	joinSessionFailure: ['msg'],
	getQuestionRequest: ['sessionid'],
	getQuestionSuccess: ['challenge'],
	getQuestionFailure: ['msg'],
	sendAnswerRequest: ['choice', 'answer']
});

export { Creators, Types };
