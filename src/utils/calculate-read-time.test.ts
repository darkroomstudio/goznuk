import { calculateReadTime } from './calculate-read-time'

describe('calculateReadTime', () => {
  it('should calculate the read time based on content length', () => {
    const content = 'Hello, World!'
    const readTime = calculateReadTime(content)
    expect(readTime).toBe(1)
  })
})
