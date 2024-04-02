//This container will use the connect utility from react-redux

import { connect } from 'react-redux';
import App from '../App';
import { leaderboardLoaded, loggedIn, moveObjects, startGame, shoot } from '../actions/index';

//Tell redux that App component (The Canvas) 
//cares about the gameState property.
const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
    currentPlayer: state.currentPlayer,
    players: state.players,
});

//map the action to the props
//Tell redux to pass startGame function to the App component (The Canvas)
//So it can trigger the new action.
const mapDispatchToProps = dispatch => ({
    leaderboardLoaded: (players) => {
        dispatch(leaderboardLoaded(players));
    },
    loggedIn: (player) => {
        dispatch(loggedIn(player));
    },
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
    shoot: (mousePosition) => {
        dispatch(shoot(mousePosition))
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;