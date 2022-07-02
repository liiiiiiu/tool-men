import Check from '../helper/check'

const check = new Check()

const rint = /^-?\d+$/

const rposInt = /^\d+$/

const rdecimal = /^\d{1,10}([.]\d{2}){1}$/

const rposDecimal = /^\d+(\.\d{0,2})?$/

const rmobilephone = /^1[3456789][0-9]{9}$/

const remial = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

const rurl = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/

export function is_string(value: unknown): boolean {
  return check.str(value)
}

export function is_number(value: unknown): boolean {
  return check.num(value)
}

export function is_integer(value: unknown): boolean {
  return check.num(value) && rint.test(value + '')
}

export function is_positive_integer(value: unknown): boolean {
  return check.num(value) && rposInt.test(value + '')
}

export function is_float(value: unknown): boolean {
  return check.num(value) && rdecimal.test(value + '')
}

export function is_positive_float(value: unknown): boolean {
  return check.num(value) && rposDecimal.test(value + '')
}

export function is_boolean(value: unknown): boolean {
  return check.bool(value)
}

export function is_array(value: unknown): boolean {
  return check.arr(value)
}

export function is_array_like(value: unknown): boolean {
  return check.arrLike(value)
}

export function is_object(value: unknown): boolean {
  return check.obj(value)
}

export function is_plain_object(value: unknown): boolean {
  return check.plainObj(value)
}

export function is_object_like(value: unknown): boolean {
  return check.objLike(value)
}

export function is_symbol(value: unknown): boolean {
  return check.symbol(value)
}

export function is_function(value: unknown): boolean {
  return check.fun(value)
}

export function is_NaN(value: unknown): boolean {
  return check.nan(value)
}

export function is_undefined(value: unknown): boolean {
  return check.undef(value)
}

export function is_null(value: unknown): boolean {
  return check.nul(value)
}

export function is_length(value: unknown): boolean {
  return check.len(value)
}

export function is_arguments(value: unknown): boolean {
  return check.args(value)
}

export function is_error(value: unknown): boolean {
  return check.err(value)
}

export function is_leap_year(value: number): boolean {
  if (!check.num(value)) {
    return false
  }

  return ((value % 4 === 0) && (value % 100 !== 0)) || (value % 400 === 0)
}

// only for local
export function is_local_mobilephone(value: unknown): boolean {
  return rmobilephone.test(value + '')
}

export function is_email(value: unknown): boolean {
  if (!check.str(value)) {
    return false
  }

  return remial.test(value + '')
}

export function is_url(value: unknown): boolean {
  if (!check.str(value)) {
    return false
  }

  return rurl.test(value + '')
}