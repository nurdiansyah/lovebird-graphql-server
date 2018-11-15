// @flow

import loaders, {models} from './loaders'
import type {LovebirdLoaderType, JenisLovebirdLoaderType} from './loaders'
import type {LovebirdInitAttributesType} from '../../model/lovebird'

export type LovebirdInputType = LovebirdInitAttributesType

export default class LovebirdManager {
  context: Object
  lovebirdLoader: LovebirdLoaderType
  jenisLovebirdLoader: JenisLovebirdLoaderType

  constructor(context: Object) {
    this.context = context
    this.lovebirdLoader = loaders.lovebirdLoader()
    this.jenisLovebirdLoader = loaders.jenisLovebirdLoader()
  }

  // lovebird
  getLovebird(ring: string) {
    return this.lovebirdLoader.load(ring)
  }

  findLovebird(ring: string) {
    return models.Lovebird.findById(ring).then(lovebird => lovebird)
  }

  getLogsLovebird(lovebird: string | models.Lovebird) {
    if (lovebird instanceof models.Lovebird) {
      return lovebird.getLogs()
    }
    return models.LovebirdLogs.findAll({
      where: {
        ring: lovebird
      }
    }).then(logs => logs)
  }

  register(inputData: LovebirdInputType) {
    return models.Lovebird.create({
      ring: inputData.ring,
      nama: inputData.nama,
      jenisKelamin: inputData.jenisKelamin,
      jenisLovebirdId: inputData.jenisLovebirdId,
      lahir: inputData.lahir
    }).then(lovebird => lovebird.get({plain: true}))
  }

  writeLogLovebird(ring: string, message: string) {
    return models.LovebirdLogs.create({
      ring,
      log: message
    }).then(log => log.get({plain: true}))
  }

  updateLovebird(inputData: LovebirdInputType) {
    return this.findLovebird(inputData.ring).then(
      lovebird =>
        lovebird &&
        lovebird
          .update({
            nama: inputData.nama,
            jenisKelamin: inputData.jenisKelamin
          })
          .then(_result => _result.get({plain: true}))
    )
  }

  removeLovebird(ring: string) {
    return models.Lovebird.destroy({
      where: {
        ring
      }
    }).then(affectedRow => affectedRow)
  }
}
