import { test, assert } from 'vitest';
import rollDie from './rollDie.mjs';

test('Roll die produces a value in range 1 to 6', () => {
    const outcomes = [1, 2, 3, 4, 5, 6];
    const value = rollDie();

    const result = outcomes.includes(value);

    assert.equal(result, true);
});
