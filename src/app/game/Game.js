// Home.js
import React from 'react';
import { connect } from 'react-redux';
import { homeOperations } from './duck';
import { GAME_STATES } from './constants';
// component
function Game({
  gameState,
  sessionid,
	challenge,
  showSpinner,
	joinSession,
	getQuestion,
	sendAnswer
}) {
  if (gameState === GAME_STATES.JOIN_STATE) {
  return (<div>
    <p>GameState: {gameState}</p>
    <p>Current Session: {sessionid}</p>
     <label>
       SessionID:
       <input type="text" id="sessionidinput" sessionid="sessionid" />
     </label>
     <button onClick={() => joinSession(document.getElementById('sessionidinput').value)}>Join</button>
  </div>)
  } else if (gameState === 'WAITING_FOR_QUESTION_STATE') {
    return (<div>
      <p>GameState: {gameState}</p>
      <p>Current Session: {sessionid}</p>
      <p>Waiting for Questions..</p>
			<button onClick={() => getQuestion('4389')}>GetQuestion</button>
    </div>)
  } else if (gameState === 'QUESTION_STATE') {
    return (<div>
      <p>GameState: {gameState}</p>
      <p>Current Session: {sessionid}</p>
			<p> {JSON.parse(challenge).question} </p>
			{JSON.parse(challenge).choices.map((choice, key) =>
				<button onClick={() => sendAnswer('4389', '223', choice === JSON.parse(challenge).answer)}>{choice}</button>
			)}
    </div>)
  } else {
    return (<div>
      <p>Loading..</p>
    </div>)
  }
};

// container 
const mapStateToProps = state => {
  const { gameState, sessionid, challenge, showSpinner } = state.home;
  return {
    gameState,	  
    sessionid,
		challenge,
    showSpinner
  }
};

const mapDispatchToProps = dispatch => {
  return {
    joinSession: sessionid => dispatch(homeOperations.joinSession(sessionid)),
		getQuestion: sessionid => dispatch(homeOperations.getQuestion(sessionid)),
		sendAnswer: (sessionid, questionid, correct) => dispatch(homeOperations.sendAnswer(sessionid, questionid, correct))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
