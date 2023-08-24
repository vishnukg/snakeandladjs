import test from 'node:test'
import assert from 'node:assert/strict'
import board from './board.mjs'

test('snake positions', () => {
    const result = board[7]
    assert.equal(result.type, 'snake')
})

test('ladder positions', () => {
    const result = board[4]
    assert.equal(result.type, 'ladder')
})
