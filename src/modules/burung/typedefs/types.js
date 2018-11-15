// @flow

export default `
  # Detail lovebird
  type Lovebird {
    id: ID!
    # ring lovebird
    ring: String!
    # jenis lovebird
    jenis: JenisLovebird
    nama: String
    induk: Induk
    # umur lovebird per bulan
    umur: String
  }

  input LovebirdInput {
    nama: String
    jenisLovebirdId: Int
    indukId: Int
    umur: Int
    lahir: TimeStamp
  }

  type LogLovebird {
    id: ID!
    log: String
  }

  input LogLovebirdInput {
    log: String!
  }

  # Induk lovebird
  type Induk {
    id: ID!
    jantan: Lovebird
    betina: Lovebird
  }

  input IndukInput {
    jantanRing: String!
    BetinaRing: String!
  }

  type LogInduk {
    id: ID!
    log: String
  }

  input LogIndukInput {
    log: String!
  }

  # Jenis Lovebird
  type JenisLovebird {
    id: ID!
    nama: String
  }

  input JenisLovebirdInput {
    nama: String!
  }
`
