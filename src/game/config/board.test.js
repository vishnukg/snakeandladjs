import tap from 'tap';
import board from './board.js';

tap.test('snake positions', (t) => {
    const result = board[7];
    t.equal(result.type, 'snake');
    t.end();
});

tap.test('ladder positions', (t) => {
    const result = board[4];
    t.equal(result.type, 'ladder');
    t.end();
});
