const {MONTHNUMS, MONTHS, DAYS} = require('./utils/enums')
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
}

module.exports = {
  EasyDate
}
