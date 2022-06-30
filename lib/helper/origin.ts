let rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/

/**
 * get data from string type value
 *
 * @example
 * "123" => 123
 * "true" => true
 * "null" => null
 */
export default function origin(value: unknown) {
  if (typeof value === 'string') {
    if (value === +value + '') {
      return +value
    }

    if (value === 'true') {
      return true
    }

    if (value === 'false') {
      return false
    }

    if (value === 'null') {
      return null
    }

    if (rbrace.test(value)) {
      try {
        return JSON.parse(value)
      } catch (error) { }
    }
  }

  return value
}