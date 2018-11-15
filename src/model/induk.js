// @flow

import Sequelize from 'sequelize'
import type {
  HasManyCreateOne,
  HasManyAddOne,
  HasManyAddMany,
  HasManyGetMany,
  HasManyRemoveMany,
  HasManyRemoveOne,
  BelongsToSetOne,
  BelongsToGetOne
} from 'sequelize'
import {Lovebird, indukLovebirdFK} from './lovebird'
import {IndukLogs, indukLogsFK} from './induk-logs'
import type {IndukLogsInitAttributesType} from './induk-logs'

const schema = {
  id: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  }
}

export type IndukInitAttributesType = {
  jantanRing: string,
  betinaRing: string
}

export type IndukAttributesType = IndukInitAttributesType & {
  id: string
}

export class Induk extends Sequelize.Model<IndukAttributesType, IndukInitAttributesType> {
  id: string
  jantanRing: string
  betinaRing: string
  addLog: HasManyAddOne<IndukLogs, string>
  addLogs: HasManyAddMany<IndukLogs, string>
  createLog: HasManyCreateOne<IndukLogsInitAttributesType, IndukLogs>
  getLogs: HasManyGetMany<IndukLogs>
  removeLog: HasManyRemoveOne<IndukLogs, string>
  removeLogs: HasManyRemoveMany<IndukLogs, string>
  setJantan: BelongsToSetOne<Lovebird, string>
  getJantan: BelongsToGetOne<Lovebird>
  setBetina: BelongsToSetOne<Lovebird, string>
  getBetina: BelongsToGetOne<Lovebird>
  addChild: HasManyAddOne<Lovebird, string>
  addChilds: HasManyAddMany<Lovebird, string>
  removeChild: HasManyRemoveOne<Lovebird, string>
  removeChilds: HasManyRemoveMany<Lovebird, string>

  static associate(models: Object) {
    Induk.belongsTo(models.Lovebird, {
      foreignKey: {
        name: 'jantanRing',
        allowNull: false
      },
      as: 'jantan'
    })
    Induk.belongsTo(models.Lovebird, {
      foreignKey: {
        name: 'betinaRing',
        allowNull: false
      },
      as: 'betina'
    })
    Induk.hasMany(models.IndukLogs, {
      foreignKey: indukLogsFK,
      as: 'logs',
      allowNull: true,
      defaultValue: true
    })
    Induk.hasMany(models.Lovebird, {
      foreignKey: indukLovebirdFK,
      as: 'childs',
      constraints: false
    })
  }
}

export default (sequelize: Sequelize) => {
  Induk.init(schema, {
    sequelize
  })
  return Induk
}
