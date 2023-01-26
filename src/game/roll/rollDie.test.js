import tap from 'tap';
import rollDie from './rollDie.js';

tap.test('Roll die produces a value in range 1 to 6', (t) => {
    const outcomes = [1, 2, 3, 4, 5, 6];
    const value = rollDie();

    const result = outcomes.includes(value);

    t.equal(result, true);
    t.end();
});
