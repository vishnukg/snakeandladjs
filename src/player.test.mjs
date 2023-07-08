import tap from 'tap';
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

tap.test('Player moves one position starting at zero', (t) => {
    const player = create_player();
    const newPosition = player.move();
    t.equal(newPosition, 1);
    t.end();
});

tap.test('Player moves twice to reach position 2', (t) => {
    const player = create_player();
    player.move();
    const newPosition = player.move();
    t.equal(newPosition, 2);
    t.end();
});

tap.test('Player moves twice to reach position 2', (t) => {
    const player = create_player();
    player.move();
    const newPosition = player.move();
    t.equal(newPosition, 2);
    t.end();
});

tap.test('Player moves 100 times to finish the game', (t) => {
    const player = create_player();
    const numberOfMoves = 100;
    while (player.move() < numberOfMoves);
    t.equal(player.finished, true);
    t.end();
});

tap.test(
    'Player would not finish the game if they dont reach position 100',
    (t) => {
        const player = create_player();
        const numberOfMoves = 99;
        while (player.move() < numberOfMoves) {
            t.equal(player.finished, false);
        }

        t.end();
    }
);

tap.test('Player moves by the value returned by the die', (t) => {
    const player = create_player();
    const numberOfMoves = rollDie();
    const newPosition = player.move(numberOfMoves);
    t.equal(newPosition, numberOfMoves);
    t.end();
});

// tap.test('Of two players, the player 2 reaches 100 to win the game', (t) => {
//     const p1 = create_player();
//     const p2 = create_player();
//
//     const game = createGame();
//
//     const numberOfMoves = 100;
//     while (game.move(p2) < numberOfMoves);
//     while (game.move(p1) < numberOfMoves);
//     t.equal(game.winner, p2);
//     t.end();
// });

tap.test('Of two players, second player cannot make the first move', (t) => {
    const p1 = create_player();
    const p2 = create_player();

    const game = createGame(p1);

    const result = game.move(p2);
    t.equal(result, -1);
    t.end();
});
