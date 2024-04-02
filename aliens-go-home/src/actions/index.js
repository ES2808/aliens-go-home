export const LEADERBOARD_LOADED = 'LEADERBOARD_LOADED';
export const LOGGED_IN = 'LOGGED_IN';
export const MOVE_OBJECTS = "MOVE_OBJECTS";

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

//The action to remove the title and the startgame components
//from screen when user click on button
export const START_GAME = 'START_GAME';
export const startGame = () => ({
    type: START_GAME,
});
//The actions to make the game connect to service when players
//authenticate, leaderboard is not displayed for unauthenticated players.
export const leaderboardLoaded = players => ({
    type: LEADERBOARD_LOADED,
    players,
});

export const loggedIn = player => ({
    type: LOGGED_IN,
    player,
});

export const SHOOT = 'SHOOT';
export const shoot = (mousePosition) => ({
    type: SHOOT,
    mousePosition,
});