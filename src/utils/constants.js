//Very wide to provide a full screen feeling
export const skyAndGroundWidth = 5000;

export const gameWidth = 800;
/* To Hold the rules for:
define where the flying objects will appear and set some
interval and some amx number of flying object
*/
//Every one second the game will show new flying obj.
export const createInterval = 1000;
//There will be no more than 4 obj.
export const maxFlyingObjects = 4;
//New obj will appear at the manitude of -1000 on the Y axis.
export const flyingObjectsStarterYAxis = -1000;
//Defines four magnitudes on the X axis where objects can spring to life
export const flyingObjectsStarterPositions = [
-300,
-150,
150,
300,
];

export const gameHeight = 1200;