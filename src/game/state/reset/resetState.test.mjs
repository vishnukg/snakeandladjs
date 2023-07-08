import { test, assert } from 'vitest';
import reset from './resetState.mjs';

test('Reset function resets the state to inital value', () => {
    const state = {
        gameOver: false,
        positions: { player1: 0, player2: 0 }
    };

    const result = reset(state);

    assert.equal(result.gameOver, false);
    assert.equal(result.positions.player1, 0);
    assert.equal(result.positions.player2, 0);
});
