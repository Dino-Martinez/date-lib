const {MONTHNUMS, MONTHS, DAYS} = require('./utils/enums')
const indicator = require('ordinal/indicator')
class EasyDate {
  constructor (...args) {
    this._date = new Date(...args)
  }

  // Helpers
  _shorten (value) {
    if (typeof value === 'number')
      return value % 100
    return value.slice(0, 3)
  }

  _pad (value) {
    if (typeof value !== 'string')
      value = '' + value
    
    return value.padStart(2, '0')
  }

  _indicator(value) {
    if (typeof value !== 'number')
      return value 
    
    return indicator(value)
  }

  // Accessors
  get day () {
    return DAYS[this._date.getDay()]
  }
  
  get dy () {
    return this._shorten(this.day)
  }

  get month () {
    return MONTHS[this._date.getMonth()]
  }

  get mon () {
    return this._shorten(this.month)
  }

  get monthNum () {
    // No longer 0 indexed :)
    return this._date.getMonth() + 1
  }

  get year () {
    return this._date.getFullYear()
  }

  get yr () {
    return this._shorten(this.year)
  }

  get date () {
    return this._date.getDate()
  }

  get hours () {
    return this._date.getHours()
  }

  get mins () {
    return this._date.getMinutes()
  }

  get minutes () {
    return this._date.getMinutes()
  }

  get secs () {
    return this._date.getSeconds()
  }

  get seconds () {
    return this._date.getSeconds()
  }
  
  // Mutators
  set month (newVal) {
    return this._date.setMonth(MONTHNUMS[newVal.toUpperCase()])
  }

  set year (newVal) {
    return this._date.setFullYear(newVal)
  }

  set date (newVal) {
    return this._date.setDate(newVal)
  }

  set hours (newVal) {
    return this._date.setHours(newVal)
  }

  set minutes (newVal) {
    return this._date.setMinutes(newVal)
  }

  set mins (newVal) {
    return this._date.setMinutes(newVal)
  }

  set seconds (newVal) {
    return this._date.setSeconds(newVal)
  }

  set secs (newVal) {
    return this._date.setSeconds(newVal)
  }

  // Methods
  format(mask) {
    const SPECIALCHARACTERS = {
      'Y': this.year,                 // 2022
      'y': this.yr,                   // 22
      'M': this.month,                // February
      'm': this.mon,                  // Feb
      'N': this._pad(this.monthNum),  // 02
      'n': this.monthNum,             // 2
      'W': this.day,                  // Wednesday
      'w': this.dy,                   // Wed
      'D': this._pad(this.date),      // 02
      'd': this.date,                 // 2
      'P': this._pad(this.date) + this._indicator(this.date),
      'p': this.date + this._indicator(this.date),
      'H': this._pad(this.hours),
      'h': this.hours,
      'I': this._pad(this.mins),
      'i': this.mins,
      'S': this._pad(this.secs),
      's': this.secs
    }

    let formatted = ''

    // Type check mask param
    if (typeof mask !== 'string')
      throw new Error('Mask must be a string!')
    
    // Parse mask, building formatted output along the way
    for (let next of mask) {
      const replacement = SPECIALCHARACTERS[next] ?? next
      formatted += replacement
    }

    return formatted
  }
}

module.exports = {
  EasyDate
}