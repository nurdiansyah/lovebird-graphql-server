import expect from 'expect'
import db from '../index'

const sequelize = db.sequelize

describe('models test', () => {
  describe('test', () => {
    it('test connection', () => {
      sequelize.sync({force: true, logging: msg => console.log(msg)}).then(() => {
        db.JenisLovebird.create({
          nama: 'biola'
        })
      })
    })
  })
})
