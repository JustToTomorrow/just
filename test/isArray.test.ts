import isArray from '../src/isArray'

describe('isArray', () => {
  test('"1" 是否是数组', () => {
    expect(isArray('1')).toBe(false)
  })

  test('1 是否是数组', () => {
    expect(isArray(1)).toBe(false)
  })

  test('null 是否是数组', () => {
    expect(isArray(null)).toBe(false)
  })

  test('undefined 是否是数组', () => {
    expect(isArray(undefined)).toBe(false)
  })

  test('{} 是否是数组', () => {
    expect(isArray({})).toBe(false)
  })

  test('["1"] 是否是数组', () => {
    expect(isArray(['1'])).toBe(true)
  })

  test('[{}] 是否是数组', () => {
    expect(isArray([{}])).toBe(true)
  })

  test('[null, undefined] 是否是数组', () => {
    expect(isArray([null, undefined])).toBe(true)
  })
})
