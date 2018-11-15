// @flow

import Sequelize from 'sequelize'

const schema = {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER(10)
  }
}

type UserType = {
  username: string,
  password: string,
  nama: string,
  status: number
}

class User extends Sequelize.Model<User> {
  static associate(models: Object) {}
}

export default (sequelize: Sequelize) => {
  User.init(schema, {
    sequelize
  })
  return User
}
