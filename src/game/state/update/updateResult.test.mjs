import { test, assert } from 'vitest';
import updateResult from './updateResult.mjs';

test('Updating game result', () => {
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

    assert.equal(result.gameOver, true);
});
