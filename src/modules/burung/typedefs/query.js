// @flow

export default `
  extend type Query {
    getLovebird(ring: String!): Lovebird
    listLovebird: [Lovebird]
    listJenisLovebird: [JenisLovebird]
    getJenisLovebird(id: ID!): JenisLovebird
    listInduk: [Induk]
    getInduk(id: ID!): Induk
    logLovebird(ring: String, limit: Int): [LogLovebird]
    logInduk(idInduk: ID!, limit: Int): LogInduk
  }
`
