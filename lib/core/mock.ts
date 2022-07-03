import { mock } from 'mockjs'

/**
 * Mock avatar.
 *
 * @returns {string} Avatar url.
 *
 * @example
 *
 * mock_avatar() // http://dummyimage.com/100x100
 */
export function mock_avatar() {
  return mock("@image('100x100')")
}