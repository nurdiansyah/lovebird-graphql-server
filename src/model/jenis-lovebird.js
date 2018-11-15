// @flow

import Sequelize from 'sequelize'
import type {HasManyGetMany, HasManyCount} from 'sequelize'
import {Lovebird, jenisLovebirdFK} from './lovebird'

const schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  }
}

export type JenisLovebirdInitAttributesType = {
  nama: string
}

export type JenisLovebirdAttributesType = JenisLovebirdInitAttributesType & {
  id: string
}

export class JenisLovebird extends Sequelize.Model<
  JenisLovebirdAttributesType,
  JenisLovebirdInitAttributesType
> {
  id: string
  nama: string
  getLovebirds: HasManyGetMany<Lovebird>
  countLovebirds: HasManyCount

  static associate(models: Object) {
    JenisLovebird.hasMany(models.Lovebird, {
      foreignKey: jenisLovebirdFK,
      as: 'lovebirds'
    })
  }
}

export default (sequelize: Sequelize) => {
  JenisLovebird.init(schema, {
    sequelize,
    timestamps: false
  })
  return JenisLovebird
}
