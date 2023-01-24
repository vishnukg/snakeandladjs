import tap from 'tap';
import updatePosition from './updatePosition.js';

tap.test('Update player1 position', (t) => {
    const state = {
        gameOver: false,
        positions: { player1: 0, player2: 0 }
    };
    const positions = {
        player1: 4
    };
    const result = updatePosition(state, positions);

    t.equal(result.positions.player1, 4);
    t.end();
});

tap.test(
    'Updating player1 position should not change player2 position',
    (t) => {
        const state = {
            gameOver: false,
            positions: { player1: 0, player2: 0 }
        };
        const positions = {
            player1: 4
        };

        const result = updatePosition(state, positions);

        t.equal(result.positions.player2, 0);
        t.end();
    }
);
