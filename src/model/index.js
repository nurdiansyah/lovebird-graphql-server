// @flow

import Sequelize from 'sequelize'
import config from '../config'
import Lovebird from './lovebird'
import JenisLovebird from './jenis-lovebird'
import LovebirdLogs from './lovebird-logs'
import Induk from './induk'
import IndukLogs from './induk-logs'
import Farm from './farm'
import User from './user'

// const basename = path.basename(__filename)
const dbConfig = config.db

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

// Load each model file
export const models = {}

models.Lovebird = Lovebird(sequelize)
models.JenisLovebird = JenisLovebird(sequelize)
models.Induk = Induk(sequelize)
models.LovebirdLogs = LovebirdLogs(sequelize)
models.IndukLogs = IndukLogs(sequelize)
models.Farm = Farm(sequelize)
models.User = User(sequelize)

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    typeof models[modelName].associate === 'function' && models[modelName].associate(models)
  }
})

export default {
  sequelize,
  ...models
}
