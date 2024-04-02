import { calculateNextPosition } from '../utils/formulas';
//Using filter to rmeove cannonballs that are not within a specific area
//remove cannon balls that are above -800 on the Y axis.
//or that moved too much to the left (lower than -500) or to the right (greater than 500).
const moveBalls = cannonBalls => (
  cannonBalls
    .filter(cannonBall => (
      cannonBall.position.y > -800 && cannonBall.position.x > -500 && cannonBall.position.x < 500
    ))
    .map((cannonBall) => {
      const { x, y } = cannonBall.position;
      const { angle } = cannonBall;
      return {
        ...cannonBall,
        position: calculateNextPosition(x, y, angle, 5),
      };
    })
);

export default moveBalls;
