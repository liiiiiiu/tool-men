import Big from 'big.js'
import Check from '../helper/check'
import origin from '../helper/origin'
import makePy from '../helper/chinese2py'

const check = new Check()

export function to_string(value: unknown): string {
  if (check.symbol(value)) {
    value = (<symbol>value).description || ''
  }

  return (value + '').toString() + ''
}

export function to_number(value: unknown): number {
  let newValue = +origin(value)

  return !check.nan(newValue) ? newValue : 0
}

export function to_integer(value: unknown, round: boolean = false): number {
  let newValue = to_number(value)

  return !round ? parseInt(newValue + '') : Math.round(newValue)
}

export function to_float(value: unknown, decimal: 1 | 2 = 2, round: boolean = false): string {
  let newValue = to_number(value)

  if (round) {
    return (+newValue).toFixed(decimal)
  }

  if (decimal > 2) decimal = 2
  if (decimal < 1) decimal = 1

  let strValue = newValue + ''
  let index = strValue.indexOf('.')
  if (index > -1) {
    strValue = strValue.substring(0, decimal + index + 1)
  } else {
    strValue += (decimal === 2 ? '.00' : '.0')
  }

  return strValue
}

// only for local
// usual, store `price` field (use `cent`) to database
export function to_local_cent(value: unknown, round: boolean = false): number {
  let newValue = +to_float(value, 2, round) || 0

  return parseInt(Big(newValue).times(100) + '') || 0
}

export function to_boolean(value: unknown): boolean {
  return !!value
}

export function to_array(value: unknown): any[] {
  if (check.arr(value)) {
    return (value as any[])
  }

  if (check.str(value) && (<string>value).indexOf(',') > -1) {
    return (<string>value).split(',')
  }

  return [value]
}

export function to_symbol(value: unknown): Symbol {
  let newValue = ''

  if (!check.str(value) || !check.num(value)) {
    newValue = to_string(value)
  }

  return Symbol(newValue || (value + ''))
}

export function to_undefined(): undefined {
  return undefined
}

export function to_null(): null {
  return null
}

// only for local
export function to_local_pinyin(value: unknown): string[] {
  let newValue = to_string(value)

  return makePy(newValue) || []
}