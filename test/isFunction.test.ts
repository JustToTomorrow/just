import isFunction from '../src/isFunction'

describe('isFunction', () => {
  test('"1" 是否是方法', () => {
    expect(isFunction('1')).toBe(false)
  })

  test('[] 是否是方法', () => {
    expect(isFunction([])).toBe(false)
  })

  test('{} 是否是方法', () => {
    expect(isFunction({})).toBe(false)
  })

  test('() => {} 是否是方法', () => {
    expect(isFunction(() => {})).toBe(true)
  })
})
