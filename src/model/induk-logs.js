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

export type IndukLogsInitAttributesType = {
  log: string,
  indukId: string
}

export type IndukLogsAttributesType = IndukLogsInitAttributesType & {
  id: string
}

export class IndukLogs extends Sequelize.Model<IndukLogsAttributesType, IndukLogsInitAttributesType> {
  id: string
  log: string
  indukId: string
}

export const indukLogsFK = {
  name: 'indukId',
  allowNull: false
}

export default (sequelize: Sequelize) => {
  IndukLogs.init(schema, {
    sequelize
  })
  return IndukLogs
}
