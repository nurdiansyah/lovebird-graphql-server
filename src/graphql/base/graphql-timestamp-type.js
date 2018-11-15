import {Kind} from 'graphql/language'
import {GraphQLScalarType} from 'graphql'

const name = 'TimeStamp'

function serializeDate(value) {
  if (value instanceof Date) {
    return value.getTime()
  } else if (typeof value === 'number') {
    return Math.trunc(value)
  } else if (typeof value === 'string') {
    return Date.parse(value)
  }
  return null
}

function parseDate(value) {
  if (value === null) {
    return null
  }

  try {
    const date = new Date(value)
    console.log(date)
    return date
  } catch (err) {
    return err
  }
}

function parseDateFromLiteral(ast) {
  if (ast.kind === Kind.INT) {
    const num = parseInt(ast.value, 10)
    return new Date(num)
  } else if (ast.kind === Kind.STRING) {
    return parseDate(ast.value)
  }
  return null
}

const TimeStampType = new GraphQLScalarType({
  name,
  description:
    'The javascript `Date` as integer. Type represents date and time ' +
    'as number of milliseconds from start of UNIX epoch.',
  serialize: serializeDate,
  parseValue: parseDate,
  parseLiteral: parseDateFromLiteral
})

export const typeDefs = `scalar ${name}`

export default TimeStampType
