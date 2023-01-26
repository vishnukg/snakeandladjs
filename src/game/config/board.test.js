import tap from 'tap';
import board from './board.js';

tap.test('Reading config', (t) => {
    console.log(board[4]);
    t.end();
});
