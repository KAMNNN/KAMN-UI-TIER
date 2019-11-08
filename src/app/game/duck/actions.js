// actions.js
import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  joinSessionRequest: ['sessionid'],
  joinSessionSuccess: ['sessionData', 'sessionid'],
  joinSessionFailure: ['msg']
});

export { Creators, Types };
