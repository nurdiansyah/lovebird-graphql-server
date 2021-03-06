// @flow

export default `
  extend type Mutation {
    registerLovebird(ring: String!, input: LovebirdInput): Lovebird
    updateLovebird(ring: String!, input: LovebirdInput): Lovebird
    removeLovebird(ring: String!): Int
    registerInduk(input: IndukInput!): Induk
    changeInduk(id: String!, input: IndukInput!): Induk
    removeInduk(id: String!): Int
    createJenisLovebird(input: JenisLovebirdInput!): JenisLovebird
    updateJenisLovebird(id: Int!, input: JenisLovebirdInput!): JenisLovebird
    removeJenisLovebird(id: Int!): Boolean
    writeLogLovebird(input: LogLovebirdInput!): Boolean
    writeLogInduk(input: LogIndukInput!): Boolean
  }
`
