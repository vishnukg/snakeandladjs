import updateResult from './updateResult.js';
import tap from 'tap';

tap.test('Updating game result', (t) => {
    const state = {
        gameOver: false,
        positions: {
            player1: 0,
            player2: 0
        }
    };
    const update = {
        gameOver: true
    };

    const result = updateResult(state, update);

    t.equal(result.gameOver, true);
    t.end();
});
