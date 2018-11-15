// @flow

import Sequelize from 'sequelize'

const schema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  log: {
    type: Sequelize.STRING
  }
}

export type LovebirdLogsInitAttributesType = {
  log: string,
  ring: string
}

export type LovebirdLogsAttributesType = LovebirdLogsInitAttributesType & {
  id: string
}

export class LovebirdLogs extends Sequelize.Model<
  LovebirdLogsAttributesType,
  LovebirdLogsInitAttributesType
> {
  id: string
  ring: string
  log: string
}

export default (sequelize: Sequelize) => {
  LovebirdLogs.init(schema, {
    sequelize
  })
  return LovebirdLogs
}

export const lovebirdLogsFK = {
  name: 'ring',
  allowNull: false
}
