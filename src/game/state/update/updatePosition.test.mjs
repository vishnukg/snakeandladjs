import { test, assert } from 'vitest';
import updatePosition from './updatePosition.mjs';

test('Update player1 position', () => {
    const state = {
        gameOver: false,
        positions: { player1: 0, player2: 0 }
    };
    const positions = {
        player1: 4
    };
    const result = updatePosition(state, positions);

    assert.equal(result.positions.player1, 4);
});

test('Updating player1 position should not change player2 position', () => {
    const state = {
        gameOver: false,
        positions: { player1: 0, player2: 0 }
    };
    const positions = {
        player1: 5
    };

    const result = updatePosition(state, positions);

    assert.equal(result.positions.player2, 0);
});
