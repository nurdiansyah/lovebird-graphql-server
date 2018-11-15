// @flow

import Sequelize from 'sequelize'
import type {HasManyAddOne, HasManyAddMany, HasManyGetMany, BelongsToSetOne, BelongsToGetOne} from 'sequelize'
import {LovebirdLogs, lovebirdLogsFK} from './lovebird-logs'
import {Induk} from './induk'
import {JenisLovebird} from './jenis-lovebird'

const schema = {
  ring: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  nama: {
    type: Sequelize.STRING
  },
  jenisKelamin: {
    type: Sequelize.ENUM,
    values: ['-', 'jantan', 'betina'],
    defaultValue: '-'
  },
  lahir: {
    type: Sequelize.DATE
  }
}

type JenisKelaminType = '-' | 'jantan' | 'betina'

export type LovebirdInitAttributesType = {
  ring: string,
  nama: string,
  jenisKelamin: JenisKelaminType,
  lahir: string,
  jenisLovebirdId: number
}

export type LovebirdAttributesType = LovebirdInitAttributesType
export class Lovebird extends Sequelize.Model<LovebirdAttributesType, LovebirdInitAttributesType> {
  ring: string
  nama: string
  jenisKelamin: JenisKelaminType
  lahir: string
  jenisLovebirdId: number
  getLogs: HasManyGetMany<LovebirdLogs>
  addLog: HasManyAddOne<LovebirdLogs, string>
  addLogs: HasManyAddMany<LovebirdLogs, string>
  setJenis: BelongsToSetOne<JenisLovebird, string>
  getJenis: BelongsToGetOne<JenisLovebird>
  setInduk: BelongsToSetOne<Induk, string>
  getInduk: BelongsToGetOne<Induk>

  static associate(models: Object) {
    Lovebird.belongsTo(models.JenisLovebird, {
      foreignKey: jenisLovebirdFK,
      as: 'jenis'
    })
    Lovebird.hasMany(models.LovebirdLogs, {
      foreignKey: lovebirdLogsFK,
      as: 'logs'
    })
    Lovebird.belongsTo(models.Induk, {
      foreignKey: indukLovebirdFK,
      as: 'induk',
      constraints: false
    })
    Lovebird.belongsTo(models.Farm, {
      foreignKey: farmLovebirdFK,
      as: 'farm'
    })
  }
}

export default (sequelize: Sequelize) => {
  Lovebird.init(schema, {
    sequelize
  })
  return Lovebird
}

export const indukLovebirdFK = {
  name: 'indukId'
}

export const farmLovebirdFK = {
  name: 'farmId'
}

export const jenisLovebirdFK = {
  name: 'jenisLovebirdId',
  allowNull: false
}
