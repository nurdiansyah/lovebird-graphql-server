// @flow

import DataLoader from 'dataloader'
import _models from '../../model'

export const models = _models

export type LovebirdLoaderType = DataLoader<string, ?models.Lovebird>
export type JenisLovebirdLoaderType = DataLoader<number, ?models.JenisLovebird>
export type IndukLoaderType = DataLoader<string, ?models.Induk>
const createLovebirdLoader = (): LovebirdLoaderType =>
  new DataLoader(rings =>
    models.Lovebird.findAll({
      where: {
        ring: rings
      }
    })
  )

const createJenisLovebirdLoader = (): JenisLovebirdLoaderType =>
  new DataLoader(ids => {
    const result = models.JenisLovebird.findAll({
      where: {
        id: ids
      }
    }).then(rows => ids.map(id => rows.find(x => x.id.toString() === id)))
    return result
  })

const createIndukLoader = (): IndukLoaderType =>
  new DataLoader(ids =>
    models.Induk.findAll({
      where: {
        id: ids
      }
    }).then(rows => ids.map(id => rows.find(x => x.id === id)))
  )

export default {
  lovebirdLoader: createLovebirdLoader,
  jenisLovebirdLoader: createJenisLovebirdLoader,
  indukLoader: createIndukLoader
}
