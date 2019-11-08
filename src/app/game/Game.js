// Home.js
import React from 'react';
import { connect } from 'react-redux';
import { homeOperations } from './duck';
import { GAME_STATES } from './constants';
// component
function Game({
  gameState,
  sessionid,
  showSpinner,
  joinSession
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
    </div>)
  } else if (gameState === 'QUESTION_STATE') {
    return (<div>
      <p>GameState: {gameState}</p>
      <p>Current Session: {sessionid}</p>
      <p> 3 + 4? </p>
     <button>1</button><button>9</button><button>7</button><button>4</button> 
    </div>)
  } else {
    return (<div>
      <p>Loading..</p>
    </div>)
  }
};

// container 
const mapStateToProps = state => {
  const { gameState, sessionid, showSpinner } = state.home;
  return {
    gameState,	  
    sessionid,
    showSpinner
  }
};

const mapDispatchToProps = dispatch => {
  return {
    joinSession: sessionid => dispatch(homeOperations.joinSession(sessionid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
