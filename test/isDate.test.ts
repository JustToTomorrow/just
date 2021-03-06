import isDate from '../src/isDate'

describe('isDate', () => {
  test('new Date() 是否是个Date', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('"2020-02-01" 是否是个Date', () => {
    expect(isDate('2020/02/01')).toBe(false)
  })

  test('"new Date(20200201)" 是否是个Date', () => {
    expect(isDate(new Date(20200201))).toBe(true)
  })
})