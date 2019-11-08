import { Creators } from './actions';
import axios from 'axios';
import { API_URL } from '../constants';
const joinSessionRequestAction = Creators.joinSessionRequest;
const joinSessionSuccessAction = Creators.joinSessionSuccess;
const joinSessionFailureAction = Creators.joinSessionFailure;
const joinSession = (sessionid) => {
  return async dispatch => {
    dispatch(joinSessionRequestAction(sessionid));
		try {
			const res = await axios.get(`${API_URL}session/create`);
			console.log(res);
			dispatch(joinSessionSuccessAction({status: 'success'}, sessionid));
		} catch {
			dispatch(joinSessionFailureAction({status: 'falied'}));
		}
  }
};

export default {
  joinSession
};
