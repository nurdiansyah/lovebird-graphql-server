// @flow

import {typeDefs as timeStampDefs} from './base/graphql-timestamp-type'
import {typeDefs as burungTypeDefs} from '../modules/burung'

const baseTypeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query
  type Mutation
  ${timeStampDefs}
`

export default `
  ${baseTypeDefs}
  ${burungTypeDefs}
`
