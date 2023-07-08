import { test, assert } from 'vitest';
import { rollDie } from './game/roll/index.mjs';

const createGame = (firstPlayer) => {
    let winner;
    let started = false;

    const move = (player) => {
        if (!started && player !== firstPlayer) {
            return -1;
        }
        const pos = player.move();
        if (!winner && player.finished) winner = player;
        return pos;
    };

    return {
        move,
        get winner() {
            return winner;
        }
    };
};

const create_player = () => {
    let position = 0;
    let finished = false;

    const moveOne = () => {
        position++;
        if (position === 100) finished = true;
        return position;
    };

    const move = (n = 1) => {
        for (let i = 0; i < n; i++) {
            moveOne();
        }
        return position;
    };

    return {
        move,
        get finished() {
            return finished;
        }
    };
};

test('Player moves one position starting at zero', () => {
    const player = create_player();
    const newPosition = player.move();
    assert.equal(newPosition, 1);
});

test('Player moves twice to reach position 2', () => {
    const player = create_player();
    player.move();
    const newPosition = player.move();
    assert.equal(newPosition, 2);
});

test('Player moves twice to reach position 2', () => {
    const player = create_player();
    player.move();
    const newPosition = player.move();
    assert.equal(newPosition, 2);
});

test('Player moves 100 times to finish the game', () => {
    const player = create_player();
    const numberOfMoves = 100;
    while (player.move() < numberOfMoves);
    assert.equal(player.finished, true);
});

test('Player would not finish the game if they dont reach position 100', () => {
    const player = create_player();
    const numberOfMoves = 99;
    while (player.move() < numberOfMoves) {
        assert.equal(player.finished, false);
    }
});

test('Player moves by the value returned by the die', () => {
    const player = create_player();
    const numberOfMoves = rollDie();
    const newPosition = player.move(numberOfMoves);
    assert.equal(newPosition, numberOfMoves);
});

// test('Of two players, the player 2 reaches 100 to win the game', () => {
//     const p1 = create_player();
//     const p2 = create_player();
//
//     const game = createGame();
//
//     const numberOfMoves = 100;
//     while (game.move(p2) < numberOfMoves);
//     while (game.move(p1) < numberOfMoves);
//     assert.equal(game.winner, p2);
// });

test('Of two players, second player cannot make the first move', () => {
    const p1 = create_player();
    const p2 = create_player();

    const game = createGame(p1);

    const result = game.move(p2);
    assert.equal(result, -1);
});
