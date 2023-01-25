import tap from 'tap';
import board from './board.js';

tap.test('Reading config', (t) => {
    const boardConfig = board();
    console.log(boardConfig[4].move);
    t.end();
});
