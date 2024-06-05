import { slugify } from './slugify'

describe('slugify', () => {
  it('should convert a string into a URL-friendly slug', () => {
    expect(slugify('Hello, World!')).toBe('hello-world')
  })
})
