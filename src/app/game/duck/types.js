// types.js
import { createTypes } from 'reduxsauce';

export default createTypes(`
  JOIN_SESSION_REQUEST
  JOIN_SESSION_SUCCESS
  JOIN_SESSION_FAILURE
  GET_QUESTION_REQUEST
	GET_QUESTION_SUCCESS
	GET_QUESTION_FAILURE
	SEND_ANSWER_REQUEST
	SEND_ANSWER_SUCCESS
	SEND_ANSWER_FAILURE
`, {});
