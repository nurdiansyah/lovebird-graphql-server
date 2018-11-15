// @flow

import loaders, {models} from './loaders'
import type {JenisLovebirdLoaderType} from './loaders'
import type {JenisLovebirdInitAttributesType} from '../../model/jenis-lovebird'

export type JenisLovebirdInputType = JenisLovebirdInitAttributesType

export default class JenisLovebirdManager {
  context: Object
  jenisLovebirdLoader: JenisLovebirdLoaderType

  constructor(context: Object) {
    this.jenisLovebirdLoader = loaders.jenisLovebirdLoader()
    this.context = context
  }
  // jenis lovebird
  getJenisLovebird(id: number) {
    return this.jenisLovebirdLoader.load(id)
  }

  findJenisLovebird(id: number) {
    return models.JenisLovebird.findById(id).then(jenisLovebird => jenisLovebird)
  }

  createJenisLovebird(input: {nama: string}) {
    return models.JenisLovebird.create({
      nama: input.nama
    }).then(jenisLovebird => jenisLovebird.get({plain: true}))
  }

  updateJenisLovebird(id: number, inputData: Object) {
    return this.findJenisLovebird(id).then(
      induk =>
        induk &&
        induk
          .update({
            nama: inputData.nama
          })
          .then(result => result.get({plain: true}))
    )
  }

  listJenisLovebird() {
    return models.JenisLovebird.findAll()
  }
}
