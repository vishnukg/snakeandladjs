import tap from 'tap';
import reset from './resetState.mjs';

tap.test('Reset function resets the state to inital value', (t) => {
    const state = {
        gameOver: false,
        positions: { player1: 0, player2: 0 }
    };

    const result = reset(state);

    t.equal(result.gameOver, false);
    t.equal(result.positions.player1, 0);
    t.equal(result.positions.player2, 0);
    t.end();
});
