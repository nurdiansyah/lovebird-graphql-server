// @flow

import loaders, {models} from './loaders'
import type {IndukLoaderType} from './loaders'

export default class IndukManager {
  indukLoader: IndukLoaderType
  context: Object
  constructor(context: Object) {
    this.indukLoader = loaders.indukLoader()
    this.context = context
  }

  // induk
  findIndukLovebird(id: string) {
    return models.Induk.findById(id)
  }

  listInduk() {
    return models.Induk.findAll()
  }

  getLogsInduk(induk: string | models.Induk) {
    if (typeof induk === 'string') {
      return models.IndukLogs.findAll({
        where: {
          indukId: induk
        },
        raw: true
      })
    }
    return induk.getLogs()
  }

  registerInduk(jantanRing: string, betinaRing: string) {
    return models.Induk.create({
      jantanRing,
      betinaRing
    }).then(induk => induk.get({plain: true}))
  }

  changeInduk(id: string, jantanRing: string, betinaRing: string) {
    return this.findIndukLovebird(id).then(
      induk =>
        induk &&
        induk
          .update({
            jantanRing,
            betinaRing
          })
          .then(result => result.get({plain: true}))
    )
  }

  writeLogInduk(indukId: string, message: string) {
    return this.findIndukLovebird(indukId).then(induk => {
      induk &&
        induk
          .createLog({
            indukId: induk.get().id,
            log: message
          })
          .then(log => log.get({plain: true}))
    })
  }

  removeInduk(id: Array<number> | number) {
    return models.Induk.destroy({
      where: {
        id
      }
    })
  }

  removeIndukLogs(id: Array<number> | number) {
    return models.IndukLogs.destroy({
      where: {
        indukId: id
      }
    })
  }

  addChild(induk: models.Induk | string, lovebird: models.Lovebird) {
    if (typeof induk === 'string') {
      this.getInduk(induk).then(_induk => _induk && _induk.addChild(lovebird))
    } else {
      induk.addChild(lovebird)
    }
  }

  getInduk(id: string) {
    return this.indukLoader.load(id)
  }
}
