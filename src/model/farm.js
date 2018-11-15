// @flow

import Sequelize from 'sequelize'
import {farmLovebirdFK} from './lovebird'

const schema = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  }
}

type FarmAttributeType = {
  id: String
}

class Farm extends Sequelize.Model<FarmAttributeType> {
  id: string
  static associate(models: Object) {
    Farm.hasMany(models.Lovebird, {
      foreignKey: farmLovebirdFK,
      as: 'lovebird'
    })
  }
}

export default (sequelize: Sequelize) => {
  Farm.init(schema, {
    sequelize
  })
  return Farm
}
