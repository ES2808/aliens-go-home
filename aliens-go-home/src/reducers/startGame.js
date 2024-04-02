/*
Returns a new state object to the Redux store where the started flag 
is set to true and resets everything else inside the gameState property.
This gives users three lives again and zeros their kills counter.
*/

export default (state, initialGameState) => {
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: true,
        }
    }
};