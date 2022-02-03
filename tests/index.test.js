const { EasyDate } = require('../src/index')

test('My sanity', () => {
  expect(0).toEqual(0)
})

describe('Construction', () => {
  test('Date construction', () => {
    let d = new EasyDate()
    expect(d._date).toBeInstanceOf(Date)
  
    d = new EasyDate('9/26/1965')
    expect(d._date).toBeInstanceOf(Date)
  
    d = new EasyDate(1970, 1, 1, 0, 0, 0)
    expect(d._date).toBeInstanceOf(Date)
  
    d = new EasyDate(new Date())
    expect(d._date).toBeInstanceOf(Date)
  })
})

describe('Accessors', () => {
  const d = new EasyDate('2/2/2022')
  
  test('Day', () => {
    expect(d.day).toEqual('Wednesday')
  })

  test('Month', () => {
    expect(d.month).toEqual('February')
  })

  test('Year', () => {
    expect(d.year).toEqual(2022)
  })

  test('Short Day', () => {
    expect(d.dy).toEqual('Wed')
  })

  test('Short Month', () => {
    expect(d.mon).toEqual('Feb')
  })

  test('Short Year', () => {
    expect(d.yr).toEqual(22)
  })

  test('Date', () => {
    expect(d.date).toEqual(2)
  })

  test('Hours', () => {
    expect(d.hours).toEqual(0)
  })

  test('Minutes', () => {
    expect(d.mins).toEqual(0)
  })

  test('Seconds', () => {
    expect(d.secs).toEqual(0)
  })
})

describe('Mutators', () => {
  const d = new EasyDate('2/2/2022')

  test('Month', () => {
    d.month = 'January'
    expect(d.month).toEqual('January')
  })

  test('Year', () => {
    d.year = 2020
    expect(d.year).toEqual(2020)
  })

  test('Date', () => {
    d.date = 3
    expect(d.date).toEqual(3)
  })

  test('Hours', () => {
    d.hours = 1
    expect(d.hours).toEqual(1)
  })

  test('Minutes', () => {
    d.mins = 1
    expect(d.mins).toEqual(1)
  })

  test('Seconds', () => {
    d.secs = 1
    expect(d.secs).toEqual(1)
  })
})

describe('Output', () => {
  const d = new EasyDate(2022, 1, 2, 8, 30, 0)
  test('Formatting', () => {
    expect(d.format('y/n/d')).toEqual('22/2/2')
    expect(d.format('W M D, Y')).toEqual('Wednesday February 02, 2022')
    expect(d.format('h:I m d')).toEqual('8:30 Feb 22')
  })
})