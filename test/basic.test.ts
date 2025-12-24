import { expect, test } from 'vitest'

test('Squared', async () => {
  expect((await import("../src/basic.js")).squared(2)).toBe(4)
})

