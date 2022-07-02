import Big from 'big.js'
import Cast from '../helper/cast'
import makePy from '../helper/local/chinese2py'

const cast = new Cast()

export function to_string(value: unknown): string {
  return cast.str(value)
}

export function to_number(value: unknown): number {
  return cast.num(value)
}

export function to_integer(value: unknown, round: boolean = false): number {
  let newValue = cast.num(value)

  return !round ? parseInt(newValue + '') : Math.round(newValue)
}

export function to_float(value: unknown, decimal: 1 | 2 = 2, round: boolean = false): string {
  let newValue = cast.num(value)

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
  return cast.bool(value)
}

export function to_array(value: unknown): any[] {
  return cast.arr(value)
}

export function to_symbol(value: unknown): Symbol {
  return cast.symbol(value)
}

export function to_undefined(): undefined {
  return cast.undef()
}

export function to_null(): null {
  return cast.nul()
}

// only for local
export function to_local_pinyin(value: unknown): string[] {
  let newValue = cast.str(value)

  return makePy(newValue) || []
}