// Home.js
import styles from './styles.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import header from '../assets/header.png'
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
    return (<div className={"wrapper"}>
      <img src={header} alt="header" />
      <div className={"session-container"}>
        {/* <p>Game State: {gameState}</p>
        <p>Current Session: {sessionid}</p> */}
        <div className={"row"}>
          <label>
            Session ID:&nbsp;
            <input type="text" placeholder="ZOT1" id="sessionidinput" sessionid="sessionid" />
          </label>
          <button className={"session-button"} onClick={() => joinSession(document.getElementById('sessionidinput').value)}>Join</button>
        </div>
      </div>
    </div>)
  } else if (gameState === 'WAITING_FOR_QUESTION_STATE') {
  // if (gameState === GAME_STATES.JOIN_STATE) {
    return (<div className={"wrapper"}>
      <img src={header} alt="header" />
      <div className={"session-container"}>
        <div className={"state-container"}>
          <p>Game State: <span className={"status"}>{gameState}</span></p>
          <p>Current Session: <span className={"status"}>{sessionid}</span></p>
        </div>
        <div className={"question-container"}>
          <p>Waiting for Questions . . . </p>
          <button className={"question-button"} onClick={() => getQuestion('4389')}>Get Question</button>
        </div>
      </div>
    </div>)
  } else if (gameState === 'QUESTION_STATE') {
    return (<div className={"wrapper"}>
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
